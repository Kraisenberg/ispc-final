package com.mati.app.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mati.app.entity.User;
import com.mati.app.service.UserService;

@CrossOrigin(origins = {"http://localhost:4200"})


@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
    private PasswordEncoder passwordEncoder;
	
	@Autowired
	private UserService userService;
	
	//Create a new user
	//@Secured({"ROLE_ADMIN"})
	@PostMapping
	public ResponseEntity<?> create (@RequestBody User user){
		
		User userNew = null;
		Map<String, Object> response = new HashMap<>();
		
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
	//@Secured({"ROLE_USER","ROLE_ADMIN"})
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
	//@Secured("ROLE_ADMIN")
	@PutMapping("/{id}")
	public ResponseEntity<?> update (@RequestBody User userDetails, @PathVariable(value = "id" )Long userId){	
		
		Map<String, Object> response = new HashMap<>();
		Optional<User> user =  userService.findById(userId);
		User userUpdated = null;
		try {
								
			if(!user.isPresent()) {				
				response.put("mensaje", "Error: Usuario no encontrado");
				return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
			}
			
			user.get().setName(userDetails.getName());
			user.get().setLastname(userDetails.getLastname());
			user.get().setEmail(userDetails.getEmail());
			user.get().setPassword(passwordEncoder.encode(userDetails.getPassword()));				
			
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
	//@Secured({"ROLE_ADMIN"})
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete (@PathVariable(value = "id") Long userId){		
		
		Map<String, Object> response = new HashMap<>();
		
		try {
			userService.deleteById(userId);
			
		} catch(DataAccessException e) {
			
			response.put("mensaje", "Error al eliminar en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
		response.put("mensaje", "Usuario eliminado correctamente");
		return new ResponseEntity<Map<String,Object>>(response, HttpStatus.OK);	
	
	}
	

	//Read All users
	@GetMapping
	public List<User> readAll(){
		List<User> users = StreamSupport
				.stream(userService.findAll().spliterator(), false)
				.collect(Collectors.toList());
		return users;
	}
	
}
