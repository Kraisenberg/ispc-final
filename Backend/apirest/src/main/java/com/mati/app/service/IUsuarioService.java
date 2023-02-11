package com.mati.app.service;

import java.util.List;

import com.mati.app.entity.Role;
import com.mati.app.entity.UsuarioS;

public interface IUsuarioService {

	public UsuarioS findByUsername(String username);
	
	public UsuarioS save(UsuarioS cliente);

	public List<Role> findAllRoles();
}
