package com.example.golden_shoe.repositories;

import com.example.golden_shoe.models.PurchaseOrder;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PurchaseOrderRepository extends MongoRepository<PurchaseOrder, String> {
}
