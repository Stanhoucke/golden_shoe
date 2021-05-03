package com.example.golden_shoe.controllers;

import com.example.golden_shoe.models.PurchaseOrder;
import com.example.golden_shoe.repositories.PurchaseOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PurchaseOrderController {
    @Autowired
    PurchaseOrderRepository purchaseOrderRepository;

    @GetMapping(value = "/purchase_orders")
    public ResponseEntity<List<PurchaseOrder>> getAllPurchaseOrders(){
        return new ResponseEntity<List<PurchaseOrder>>(purchaseOrderRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/purchase_orders/{id}")
    public ResponseEntity getPurchaseOrder(@PathVariable String id){
        return new ResponseEntity<>(purchaseOrderRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/purchase_orders")
    public ResponseEntity<PurchaseOrder> postPurchaseOrder(@RequestBody PurchaseOrder purchaseOrder){
        purchaseOrderRepository.save(purchaseOrder);
        return new ResponseEntity<PurchaseOrder>(purchaseOrder, HttpStatus.CREATED);
    }
}
