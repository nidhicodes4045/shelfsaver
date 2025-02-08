package com.example.ShelfSaver;

import static com.mongodb.client.model.Filters.eq;
import org.bson.Document;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
public class QuickStart {
    public static void main( String[] args ) {
        // Replace the placeholder with your MongoDB deployment's connection string
        String uri = "mongodb+srv://avasaydam:iWYMGuCQOD6MnKjT@shelfsaver.fvczy.mongodb.net/?retryWrites=true&w=majority&appName=ShelfSaver";
        try (MongoClient mongoClient = MongoClients.create(uri)) {
            MongoDatabase database = mongoClient.getDatabase("shelfSaver");
            MongoCollection<Document> collection = database.getCollection("items");
            Document doc = collection.find(eq("name", "bananas")).first();
            if (doc != null) {
                System.out.println(doc.toJson());
            } else {
                System.out.println("No matching documents found.");
            }
        }
    }
}