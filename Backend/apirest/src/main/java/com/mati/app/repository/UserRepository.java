package com.mati.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.mati.app.entity.Region;
import com.mati.app.entity.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	@Query("from Region")
	public List<Region> findAllRegiones();
}
 