package com.mati.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.mati.app.entity.Region;
import com.mati.app.entity.User;

public interface UserService {

	public Iterable<User> findAll();
	
	public Page<User> findAll(Pageable pageable);
	
	public Optional<User> findById(Long id);
	
	public User save(User user);
	
	public void deleteById(Long id);
	
	public List<Region> findAllRegiones();

}
