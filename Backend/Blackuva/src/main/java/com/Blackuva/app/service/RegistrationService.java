package com.Blackuva.app.service;

import java.util.List;
import java.util.Optional;

import com.Blackuva.app.entity.Factura;
import com.Blackuva.app.entity.Producto;
import com.Blackuva.app.entity.User;


public interface RegistrationService {

	public User saveUser(User user);
	
	public User fetchUserByEmail(String email);

	public User fetchUserByEmailAndPassword(String email, String Password);
		
	public Iterable<User> findAll();
	
	public Optional<User> findById(Integer id);

	public void deleteById(Integer userId);

	public User save(User user);
	
	public Factura findFacturaById(Long id);
	
	public Factura saveFactura(Factura factura);
	
	public void deleteFacturaById(Long id);
	
	public List<Producto> findProductoByNombre(String term);
	
	public Producto findProductoById(Long id);
	
	public List<Producto> findAllProductos();
	
	public Producto saveProducto(Producto producto);
	
	public void deleteProductoById(Long id);

	
}
 