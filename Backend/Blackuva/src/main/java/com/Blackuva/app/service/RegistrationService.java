package com.Blackuva.app.service;

import java.util.Optional;

import com.Blackuva.app.entity.User;


public interface RegistrationService {

	public User saveUser(User user);
	
	public User fetchUserByEmail(String email);

	public User fetchUserByEmailAndPassword(String email, String Password);
		
	public Iterable<User> findAll();
	
	public Optional<User> findById(Integer id);

	public void deleteById(Integer userId);

	public User save(User user);
}
 