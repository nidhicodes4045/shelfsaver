package com.shelfsaver.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class GroceryItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String dietaryRestrictions;

    private LocalDateTime expirationDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Seller seller;

    public GroceryItem() {
    }

    public GroceryItem(String name, String dietaryRestrictions, LocalDateTime expirationDate, Seller seller) {
        this.name = name;
        this.dietaryRestrictions = dietaryRestrictions;
        this.expirationDate = expirationDate;
        this.seller = seller;
    }

    public GroceryItem(String name, LocalDateTime expirationDate, Seller seller) {
        this.name = name;
        this.dietaryRestrictions = null;
        this.expirationDate = expirationDate;
        this.seller = seller;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDietaryRestrictions() {
        return dietaryRestrictions;
    }

    public void setDietaryRestrictions(String dietaryRestrictions) {
        this.dietaryRestrictions = dietaryRestrictions;
    }

    public LocalDateTime getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(LocalDateTime expirationDate) {
        this.expirationDate = expirationDate;
    }

    public Seller getSeller() {
        return seller;
    }

    public void setUser(Seller seller) {
        this.seller = seller;
    }

    @Override
    public String toString() {
        return "Item{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", dietaryRestrictions='" + dietaryRestrictions + '\'' +
                ", expirationDate=" + expirationDate +
                ", seller=" + seller +
                '}';
    }
}
