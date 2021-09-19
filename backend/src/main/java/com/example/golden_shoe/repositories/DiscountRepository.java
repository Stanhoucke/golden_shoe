package com.example.golden_shoe.repositories;

import com.example.golden_shoe.models.Discount;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DiscountRepository extends MongoRepository<Discount, String> {
    public Discount findByName(String name);
}
