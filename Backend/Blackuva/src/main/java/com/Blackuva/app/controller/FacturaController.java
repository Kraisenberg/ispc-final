package com.Blackuva.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.Blackuva.app.entity.Factura;
import com.Blackuva.app.entity.Producto;
import com.Blackuva.app.service.RegistrationService;

@CrossOrigin(origins= {"http://localhost:4200"})
@RestController
@RequestMapping("blackuva/facturas/")
public class FacturaController {

	@Autowired 
	RegistrationService service;
	
	@GetMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Factura show(@PathVariable Long id) {
		return service.findFacturaById(id);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		service.deleteFacturaById(id);
	}
	
	@GetMapping("/productos/{term}")
	@ResponseStatus(HttpStatus.OK)
	public List<Producto> filtrarProductos(@PathVariable String term){
		return service.findProductoByNombre(term);
	}
	
	@GetMapping("/productos")
	@ResponseStatus(HttpStatus.OK)
	public List<Producto> mostrarProductos(){
		return service.findAllProductos();
	}
	
	@DeleteMapping("/productos/{id}")
	@ResponseStatus(HttpStatus.OK)
	public String deleteProducto(@PathVariable Long id){
		
		String mensaje = "Error";
		try {
			service.deleteProductoById(id);
			mensaje = "Producto eliminado correctamente";
		}
		catch(Exception e){
			mensaje = "Error al eliminar producto: "+ e.getMessage() ;
		}
		return mensaje;
	}
	
	@PostMapping("/productos")
	@ResponseStatus(HttpStatus.CREATED)
	public Producto createProducto(@RequestBody Producto producto) {
		return service.saveProducto(producto);
	}
	
	@PutMapping("/productos/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Producto updateProducto(@RequestBody Producto producto, @PathVariable Long id ) {
		
		Producto tempProducto = service.findProductoById(id);
	
			tempProducto.setNombre(producto.getNombre());
			tempProducto.setFoto(producto.getFoto());
			tempProducto.setPrecio(producto.getPrecio());
			service.saveProducto(tempProducto);
				
		return tempProducto;
	}
	
	
	
	
	
	
	
	
	
	
	
	
}
