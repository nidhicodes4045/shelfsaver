package com.shelfsaver.service;

import com.shelfsaver.entity.Buyer;
import com.shelfsaver.entity.GroceryItem;
import com.shelfsaver.repository.BuyerRepository;
import com.shelfsaver.repository.GroceryItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Generated with the help of ChatGPT
 */
@Service
public class BuyerService {

    @Autowired
    private BuyerRepository buyerRepository;

    @Autowired
    private GroceryItemRepository groceryItemRepository;

    public boolean addItemToCart(Long buyerId, Long itemId) {
        Optional<Buyer> buyerOpt = buyerRepository.findById(buyerId);
        Optional<GroceryItem> groceryItemOpt = groceryItemRepository.findById(itemId);

        if (buyerOpt.isPresent() && groceryItemOpt.isPresent()) {
            Buyer buyer = buyerOpt.get();
            GroceryItem groceryItem = groceryItemOpt.get();
            buyer.getCart().add(groceryItem);  // Add item to cart
            buyerRepository.save(buyer);  // Save the updated buyer entity
            return true;
        }
        return false;
    }

    // Remove an item from the buyer's cart
    public boolean removeItemFromCart(Long buyerId, Long itemId) {
        Optional<Buyer> buyerOpt = buyerRepository.findById(buyerId);

        if (buyerOpt.isPresent()) {
            Buyer buyer = buyerOpt.get();
            List<GroceryItem> cart = buyer.getCart();
            GroceryItem groceryItemToRemove = null;

            // Search for the item to remove in the cart
            for (GroceryItem item : cart) {
                if (item.getId().equals(itemId)) {
                    groceryItemToRemove = item;
                    break;
                }
            }

            if (groceryItemToRemove != null) {
                cart.remove(groceryItemToRemove);  // Remove item from cart
                buyerRepository.save(buyer);  // Save the updated buyer entity
                return true;
            }
        }
        return false;
    }

    // View all items in the buyer's cart
    public List<GroceryItem> viewCart(Long buyerId) {
        Optional<Buyer> buyerOpt = buyerRepository.findById(buyerId);
        return buyerOpt.map(Buyer::getCart).orElse(null);
    }
}
