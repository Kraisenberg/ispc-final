package com.Blackuva.app.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.Blackuva.app.entity.User;
import com.Blackuva.app.service.RegistrationService;
import com.Blackuva.app.service.UploadFileService;


@CrossOrigin(origins = "localhost:4200" ,maxAge = 3600)
@RestController
@RequestMapping("blackuva/users/")
public class RegistrationController {

	@Autowired
	private RegistrationService service;
	
	@Autowired
	private UploadFileService uploadFileService;
	
	@PostMapping("/registeruser")
	public User registerUser(@RequestBody User user) throws Exception {
		
		String tempEmail = user.getEmail();		
		if(tempEmail != null && "".equals(tempEmail)) {		
			
			User userObj = service.fetchUserByEmail(tempEmail);
			System.out.print(tempEmail);
			
			if(userObj != null) {
				throw new Exception("User with "+ tempEmail + " is already exist");
			}
		}
		User userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}

	
	@PostMapping("/loginuser")
	public User loginUser(@RequestBody User user) throws Exception {
		String tempEmail = user.getEmail();
		String tempPass = user.getPassword();
		User userObj = null;
		if(tempEmail != null && tempPass != null) {
			userObj = service.fetchUserByEmailAndPassword(tempEmail, tempPass);
		}
		if(userObj == null) {
			throw new Exception("Bad credentials");
		}
		return userObj;
		
	}
	
	@GetMapping
	public List<User> findAllUsers(){
		return (List<User>) service.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> read(@PathVariable(value = "id") Integer userId){
		
		
		Map<String, Object> response = new HashMap<>();
		Optional<User> oUser = null;
		
		try {
			
			oUser = service.findById(userId);
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

	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete (@PathVariable(value = "id") Integer id){		
		
		Map<String, Object> response = new HashMap<>();
		
		try {
			
			Optional<User> user = service.findById(id);
			//String nombreFotoAnterior = cliente.get().getFoto();			
			//uploadFileService.eliminar(nombreFotoAnterior);		
			service.deleteById(id);
			
		} catch(DataAccessException e) {
			
			response.put("mensaje", "Error al eliminar en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
		response.put("mensaje", "Usuario eliminado correctamente");
		return new ResponseEntity<Map<String,Object>>(response, HttpStatus.OK);	
	}
	
	
	@PutMapping("/{id}")
	public ResponseEntity<?> update (@Validated @RequestBody User userDetails, BindingResult result, @PathVariable(value = "id" )Integer userId){	
		
		Map<String, Object> response = new HashMap<>();
		Optional<User> cliente =  service.findById(userId);
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
								
			if(!cliente.isPresent()) {				
				response.put("mensaje", "Error: Usuario no encontrado");
				return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
			}
			
			cliente.get().setName(userDetails.getName());
			cliente.get().setLastname(userDetails.getLastname());
			cliente.get().setEmail(userDetails.getEmail());
			cliente.get().setPassword(userDetails.getPassword());
			cliente.get().setDateofbirth(userDetails.getDateofbirth());
			
			userUpdated = service.save(cliente.get());
			
		} catch(DataAccessException e) {
			
			response.put("mensaje", "Error: al actualizar base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		
		}
		
		response.put("mensaje", "Usuario actualizado con exito");
		response.put("usuario", userUpdated);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	
	}
	
	/*
	@PostMapping("/upload")
	public ResponseEntity<?> upload(@RequestParam("archivo") MultipartFile archivo, @RequestParam("id") Integer id){
	
		Map<String, Object> response = new HashMap<>();
		
		Optional<User> user = service.findById(id);
		
		
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
			service.save(user.get());
			
			response.put("usuario", user);
			response.put("mensaje", "Foto cargada con exito: " + nombreArchivo);
			
		}
		
			
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}
	*/
	
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
	
	
	
	
	
	
	
	
	
	
	
	
}
