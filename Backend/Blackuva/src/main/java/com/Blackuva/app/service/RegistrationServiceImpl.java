package com.Blackuva.app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Blackuva.app.entity.User;
import com.Blackuva.app.repository.RegistrationRepository;

import jakarta.transaction.Transactional;

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


	@Override
	public Iterable<User> findAll() {

		return repo.findAll();
	}

	@Override
	public Optional<User> findById(Integer id) {
		return repo.findById(id);
	}

	@Override
	@Transactional
	public void deleteById(Integer userId) {
		repo.deleteById(userId);
		
	}

	@Override
	@Transactional
	public User save(User user) {
		
		return repo.save(user);
	}
	
	
	
	
}
