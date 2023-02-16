package com.Blackuva.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Blackuva.app.entity.User;
import com.Blackuva.app.repository.RegistrationRepository;

@Service
public class RegistrationServiceImpl implements RegistrationService{
	
	@Autowired
	private RegistrationRepository repo;

	public User saveUser(User user) {		
		return repo.save(user);
	}

	public User fetchUserByEmail(String email) {
		
		return repo.findByEmail(email);
	}

	@Override
	public User fetchUserByEmailAndPassword(String email, String Password) {
		
		return repo.findByEmailAndPassword(email, Password);
	}
	
	
	
}
