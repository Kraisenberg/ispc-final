package com.Blackuva.app.service;

import com.Blackuva.app.entity.User;

public interface RegistrationService {

	public User saveUser(User user);
	
	public User fetchUserByEmail(String email);

	public User fetchUserByEmailAndPassword(String email, String Password);
}
 