package com.shelfsaver.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shelfsaver.entity.Seller;


public interface SellerRepository extends JpaRepository<Seller, Long> {

    Optional<Seller> findByUsername(String username);

    Boolean existsByUsername(String username);

}