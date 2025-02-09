package com.shelfsaver.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shelfsaver.entity.Buyer;


public interface BuyerRepository extends JpaRepository<Buyer, Long> {

    Optional<Buyer> findByUsername(String username);

    Boolean existsByUsername(String username);

}