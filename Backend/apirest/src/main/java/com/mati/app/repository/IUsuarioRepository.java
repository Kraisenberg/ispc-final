package com.mati.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.mati.app.entity.Role;
import com.mati.app.entity.UsuarioS;

public interface IUsuarioRepository extends CrudRepository<UsuarioS, Long>{
	
	public UsuarioS findByUsername(String username);
	
	@Query("select u from UsuarioS u where u.username=?1")
	public UsuarioS findByUsername2(String username);


	@Query("from Role")
	public List<Role> findAllRoles();

}
