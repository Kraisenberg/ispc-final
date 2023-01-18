package com.mati.app.service;

import com.mati.app.entity.UsuarioS;

public interface IUsuarioService {

	public UsuarioS findByUsername(String username);
}
