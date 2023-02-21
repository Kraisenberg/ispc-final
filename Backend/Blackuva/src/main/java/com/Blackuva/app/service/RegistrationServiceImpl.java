package com.Blackuva.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Blackuva.app.entity.Factura;
import com.Blackuva.app.entity.Producto;
import com.Blackuva.app.entity.User;
import com.Blackuva.app.repository.FacturaRepository;
import com.Blackuva.app.repository.ProductoRepository;
import com.Blackuva.app.repository.RegistrationRepository;

import jakarta.transaction.Transactional;

@Service
public class RegistrationServiceImpl implements RegistrationService{
	
	@Autowired
	private RegistrationRepository repo;
	
	@Autowired
	private FacturaRepository facturarepo;

	@Autowired
	private ProductoRepository productorepo;
	
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

	@Override
	@Transactional
	public Factura findFacturaById(Long id) {
	
		return facturarepo.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Factura saveFactura(Factura factura) {
		return facturarepo.save(factura);
	}

	@Override
	@Transactional
	public void deleteFacturaById(Long id) {
		facturarepo.deleteById(id);
		
	}

	@Override
	@Transactional
	public List<Producto> findProductoByNombre(String term) {	
		return productorepo.findByNombre(term);
	}

	@Override
	@Transactional
	public List<Producto> findAllProductos() {
		return productorepo.findAll();
	}

	@Override
	@Transactional
	public Producto saveProducto(Producto producto) {

		return  productorepo.save(producto);
	}
	
	@Override
	@Transactional
	public void deleteProductoById(Long id) {
		productorepo.deleteById(id);
		
	}

	@Override
	@Transactional
	public Producto findProductoById(Long id) {
		return productorepo.findById(id).get();
	}
	
	
	
	
}
