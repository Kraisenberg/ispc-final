package com.mati.app.controller;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;

import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.mati.app.entity.Region;
import com.mati.app.entity.User;
import com.mati.app.service.UploadFileService;
import com.mati.app.service.UserService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600 )
@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
    private PasswordEncoder passwordEncoder;
	
	
	private final Logger log = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private UploadFileService uploadFileService;
	
	
	//Read All users
	@GetMapping
	public List<User> readAll(){
		List<User> users = StreamSupport
				.stream(userService.findAll().spliterator(), false)
				.collect(Collectors.toList());
		return users;
	}
	
	
	@GetMapping("/page/{page}")
	public Page<User> readAll(@PathVariable Integer page){
		return userService.findAll(PageRequest.of(page, 5));
	}
	
	

	//Create a new user
	@Secured({"ROLE_ADMIN"})
	@PostMapping
	public ResponseEntity<?> create (@Valid @RequestBody User user, BindingResult result){
		
		User userNew = null;
		Map<String, Object> response = new HashMap<>();
		
		if (result.hasErrors()) {
			
			List<String> errors = result.getFieldErrors()
					.stream()
					.map(err -> 
						 "El campo: '"+ err.getField() + "' "+ err.getDefaultMessage() )
					.collect(Collectors.toList());
			
			response.put("errors", errors);
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
		}
		
		try {		
			userNew = userService.save(user);			
		} catch(DataAccessException e){
			
			response.put("mensaje", "Error al realizar el insert en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
			response.put("mensaje","El Usuario ha sido creado con exito!");
			response.put("usuario",userNew);
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	
	}
	
	
	//Read an user
	@Secured({"ROLE_USER","ROLE_ADMIN"})
	@GetMapping("/{id}")
	public ResponseEntity<?> read(@PathVariable(value = "id") Long userId){
		
		
		Map<String, Object> response = new HashMap<>();
		Optional<User> oUser = null;
		
		try {
			
			oUser = userService.findById(userId);
		}
		catch(DataAccessException e){
			response.put("mensaje", "Error: al consultar base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		
		if(!oUser.isPresent()) {
			response.put("mensaje", "El Usuario con ID: " + userId.toString() + " es inexistente en la base de datos");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		
		return new ResponseEntity<Optional<User>>(oUser, HttpStatus.OK);		 
	
	}
	
	
	//Update a user
	@Secured("ROLE_ADMIN")
	@PutMapping("/{id}")
	public ResponseEntity<?> update (@Valid @RequestBody User userDetails, BindingResult result, @PathVariable(value = "id" )Long userId){	
		
		Map<String, Object> response = new HashMap<>();
		Optional<User> user =  userService.findById(userId);
		User userUpdated = null;
		
		if (result.hasErrors()) {
			
			List<String> errors = result.getFieldErrors()
					.stream()
					.map(err -> 
						 "El campo: '"+ err.getField() + "' "+ err.getDefaultMessage() )
					.collect(Collectors.toList());
			
			response.put("errors", errors);
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
		}
		
		
		try {
								
			if(!user.isPresent()) {				
				response.put("mensaje", "Error: Usuario no encontrado");
				return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
			}
			
			user.get().setName(userDetails.getName());
			user.get().setLastname(userDetails.getLastname());
			user.get().setEmail(userDetails.getEmail());
			user.get().setPassword(passwordEncoder.encode(userDetails.getPassword()));
			user.get().setRegion(userDetails.getRegion());
			
			userUpdated = userService.save(user.get());
			
		} catch(DataAccessException e) {
			
			response.put("mensaje", "Error: al actualizar base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		
		}
		
		response.put("mensaje", "Usuario actualizado con exito");
		response.put("usuario", userUpdated);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	
	}
	
	//Delete an user
	@Secured({"ROLE_ADMIN"})
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete (@PathVariable(value = "id") Long userId){		
		
		Map<String, Object> response = new HashMap<>();
		
		try {
			
			Optional<User> user = userService.findById(userId);
			String nombreFotoAnterior = user.get().getFoto();			
			uploadFileService.eliminar(nombreFotoAnterior);		
			userService.deleteById(userId);
			
		} catch(DataAccessException e) {
			
			response.put("mensaje", "Error al eliminar en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
		response.put("mensaje", "Usuario eliminado correctamente");
		return new ResponseEntity<Map<String,Object>>(response, HttpStatus.OK);	
	
	}
	@PostMapping("/upload")
	public ResponseEntity<?> upload(@RequestParam("archivo") MultipartFile archivo, @RequestParam("id") Long id){
	
		Map<String, Object> response = new HashMap<>();
		
		Optional<User> user = userService.findById(id);
		
		
		if(!archivo.isEmpty()) {
			
			String nombreArchivo = null;
			
			try {
				
				nombreArchivo =  uploadFileService.copiar(archivo);
				
			} catch (IOException e) {			
				
				response.put("mensaje", "Error al subir imagen: ");
				response.put("error", e.getMessage().concat(": ").concat(e.getCause().getMessage()));
				return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
				
			}
			
			String nombreFotoAnterior = user.get().getFoto();	
			
			uploadFileService.eliminar(nombreFotoAnterior);
			
			user.get().setFoto(nombreArchivo);
			userService.save(user.get());
			
			response.put("usuario", user);
			response.put("mensaje", "Foto cargada con exito: " + nombreArchivo);
			
		}
		
	
		
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}
	
	
	@GetMapping("/uploads/img/{nombreFoto:.+}")
	public ResponseEntity<Resource> verFoto(@PathVariable String nombreFoto){

		Resource recurso = null;	
		
		try {
			recurso = uploadFileService.cargar(nombreFoto);
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		
		HttpHeaders cabecera = new HttpHeaders();
		cabecera.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + recurso.getFilename() + "\"" );
		return new ResponseEntity<Resource>(recurso, cabecera ,HttpStatus.OK);
	
	}
	
	@Secured("ROLE_ADMIN")
	@GetMapping("/regiones")
	public List<Region> listarRegiones(){
		return userService.findAllRegiones();
	}
	
	
	
	
}
