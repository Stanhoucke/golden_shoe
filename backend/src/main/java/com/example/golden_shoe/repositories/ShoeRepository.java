package com.example.golden_shoe.repositories;

import com.example.golden_shoe.models.Shoe;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ShoeRepository extends MongoRepository<Shoe, String> {
    public Shoe findByName(String name);
    public List<Shoe> findByBrand(String brand);
}
