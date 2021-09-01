package com.tssa301.dscatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tssa301.dscatalog.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
}
