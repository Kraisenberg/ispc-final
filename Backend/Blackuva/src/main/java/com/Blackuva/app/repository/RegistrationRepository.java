package com.Blackuva.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Blackuva.app.entity.User;

public interface RegistrationRepository extends JpaRepository<User, Integer>{
	
	public User findByEmail(String email);
	
	public User findByEmailAndPassword(String email, String password);
	
}