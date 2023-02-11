package com.mati.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mati.app.entity.Role;
import com.mati.app.entity.UsuarioS;
import com.mati.app.repository.IUsuarioRepository;

@Service
public class UsuarioService implements IUsuarioService, UserDetailsService {

	@Autowired
	private IUsuarioRepository usuarioDao;
	
	private Logger logger = LoggerFactory.getLogger(UsuarioService.class);
	
	@Override
	@Transactional(readOnly=true)
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		UsuarioS usuario = usuarioDao.findByUsername(username);
		
		if(usuario == null) {
			logger.error("Error en login: el Usuario " + username + " es inexistente!");
			throw new UsernameNotFoundException("Error en login: el Usuario " + username + " es inexistente!");
		}
		
		List<GrantedAuthority> autorities = usuario.getRoles()
				.stream()
				.map(role -> new SimpleGrantedAuthority(role.getNombre()))
				.peek(autority -> logger.info("Role: " + autority.getAuthority()))
				.collect(Collectors.toList());
		
		return new User(usuario.getUsername(), usuario.getPassword(), usuario.getEnabled(), true, true, true, autorities);
	}

	@Override
	@Transactional(readOnly=true)
	public UsuarioS findByUsername(String username) {
	
		return usuarioDao.findByUsername(username);
	}

	@Override
	public UsuarioS save(UsuarioS usuario) {
		
		return usuarioDao.save(usuario);
	}

	@Override
	@Transactional(readOnly = true)
	public List<Role> findAllRoles() {
	
		return usuarioDao.findAllRoles();
	}

}
