package com.mati.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.mati.app.entity.Role;
import com.mati.app.service.UsuarioService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600 )
@RestController
@RequestMapping("/api/admins")
public class UsuarioController {
		
	UsuarioService usuarioService; 
	
	@Autowired
    private PasswordEncoder passwordEncoder;
	
	
	
	
	
	@GetMapping("/roles")
	public List<Role> listarRoles(){
		return usuarioService.findAllRoles();
	}
	
}
