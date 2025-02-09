package com.shelfsaver.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shelfsaver.entity.GroceryItem;

/**
 * Repository interface for Items.
 */
public interface GroceryItemRepository extends JpaRepository<GroceryItem, Long> {

	boolean existsByName(String name);
}