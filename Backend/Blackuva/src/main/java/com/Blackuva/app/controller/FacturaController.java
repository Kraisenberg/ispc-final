package com.Blackuva.app.controller;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.Blackuva.app.entity.Factura;
import com.Blackuva.app.entity.Producto;
import com.Blackuva.app.service.RegistrationService;
import com.Blackuva.app.service.UploadFileService;

@CrossOrigin(origins= {"http://localhost:4200"})
@RestController
@RequestMapping("blackuva/facturas")
public class FacturaController {

	@Autowired 
	RegistrationService service;
	
	@Autowired
	private UploadFileService uploadFileService;
	
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
	
	@GetMapping("/productos/nombre/{term}")
	@ResponseStatus(HttpStatus.OK)
	public List<Producto> filtrarProductos(@PathVariable String term){
		return service.findProductoByNombre(term);
	}
	
	@GetMapping("/productos/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Producto obtenerProductoById(@PathVariable (value="id") Long id){
		return service.findProductoById(id);
	}
	
	@GetMapping("/productos")
	@ResponseStatus(HttpStatus.OK)
	public List<Producto> mostrarProductos(){
		return service.findAllProductos();
	}
	 
	@DeleteMapping("/productos/{id}")
	//@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<?> deleteProducto(@PathVariable Long id){
		
		Map<String, Object> response = new HashMap<>();
		try {
			Producto oProduct = service.findProductoById(id);
			String nombreFotoAnterior = oProduct.getFoto();			
			uploadFileService.eliminar(nombreFotoAnterior);		
			service.deleteProductoById(id);
		}
		catch(DataAccessException e){
			response.put("mensaje", "Error al eliminar en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "Usuario eliminado correctamente");
		return new ResponseEntity<Map<String,Object>>(response, HttpStatus.OK);	
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
	
	
	
	@PostMapping("/upload")
	public ResponseEntity<?> upload(@RequestParam("archivo") MultipartFile archivo, @RequestParam("id") Long id){
	
		Map<String, Object> response = new HashMap<>();
		
		Producto product = service.findProductoById(id);
		
		
		if(!archivo.isEmpty()) {
			
			String nombreArchivo = null;
			
			try {
				
				nombreArchivo =  uploadFileService.copiar(archivo);
				
			} catch (IOException e) {			
				
				response.put("mensaje", "Error al subir imagen: ");
				response.put("error", e.getMessage().concat(": ").concat(e.getCause().getMessage()));
				return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
				
			}
			
			String nombreFotoAnterior = product.getFoto();	
			
			uploadFileService.eliminar(nombreFotoAnterior);
			
			product.setFoto(nombreArchivo);
			service.saveProducto(product);
			
			response.put("usuario", product);
			response.put("mensaje", "Foto cargada con exito: " + nombreArchivo);
			
		}
		
			
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}
	
	
	@GetMapping("/uploads/img/{nombreFoto:.+}")
	public ResponseEntity<Resource> verFoto(@PathVariable String nombreFoto){

		Resource recurso = null;	
		
		try {
			recurso = uploadFileService.cargar(nombreFoto);
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		
		HttpHeaders cabecera = new HttpHeaders();
		cabecera.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + recurso.getFilename() + "\"" );
		return new ResponseEntity<Resource>(recurso, cabecera ,HttpStatus.OK);
	
	
	}
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Factura crear(@RequestBody Factura factura) {
		
		return this.service.saveFactura(factura);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
