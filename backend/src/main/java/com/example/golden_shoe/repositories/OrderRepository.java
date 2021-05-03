package com.example.golden_shoe.repositories;

import com.example.golden_shoe.models.Shoe;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<Shoe, String> {
}
