package com.example.golden_shoe.controllers;

import com.example.golden_shoe.models.Discount;
import com.example.golden_shoe.models.Order;
import com.example.golden_shoe.models.PurchaseOrder;
import com.example.golden_shoe.models.Shoe;
import com.example.golden_shoe.repositories.DiscountRepository;
import com.example.golden_shoe.repositories.PurchaseOrderRepository;
import com.example.golden_shoe.repositories.ShoeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PurchaseOrderController {
    @Autowired
    PurchaseOrderRepository purchaseOrderRepository;
    @Autowired
    ShoeRepository shoeRepository;
    @Autowired
    DiscountRepository discountRepository;

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
        PurchaseOrder newPurchaseOrder = new PurchaseOrder();

        ArrayList<Order> orders = purchaseOrder.getOrders();
        for (Order order : orders) {
            Shoe shoe = shoeRepository.findById(order.getShoe().getId()).get();
            shoe.updatePurchasedStock(order.getSize(), order.getQuantity());
            shoeRepository.save(shoe);
        }

        newPurchaseOrder.addOrders(orders);
        if (purchaseOrder.getDiscount() != null && !purchaseOrder.getDiscount().isExpired()) {
            Discount discount = discountRepository.findById(purchaseOrder.getDiscount().getId()).get();
            newPurchaseOrder.setDiscount(discount);
        }

        purchaseOrderRepository.save(newPurchaseOrder);
        return new ResponseEntity<PurchaseOrder>(newPurchaseOrder, HttpStatus.CREATED);
    }
}
