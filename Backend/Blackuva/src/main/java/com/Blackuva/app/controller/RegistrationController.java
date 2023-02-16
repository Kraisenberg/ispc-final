package com.Blackuva.app.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Blackuva.app.entity.User;
import com.Blackuva.app.service.RegistrationService;

@CrossOrigin(origins = "localhost:4200" ,maxAge = 3600)
@RestController
@RequestMapping("blackuva/")
public class RegistrationController {

	@Autowired
	private RegistrationService service;
	
	
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




}
