package com.example.golden_shoe.controllers;

import com.example.golden_shoe.models.Discount;
import com.example.golden_shoe.repositories.DiscountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DiscountController {
    @Autowired
    DiscountRepository discountRepository;

    @GetMapping(value = "/discounts")
    public ResponseEntity<List<Discount>> getAllDiscounts(){
        return new ResponseEntity<List<Discount>>(discountRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/discounts/{id}")
    public ResponseEntity getDiscount(@PathVariable String id){
        return new ResponseEntity(discountRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/discounts")
    public ResponseEntity<Discount> newDiscount(@RequestBody Discount discount){
        Discount newDiscount = new Discount(discount.getName(), discount.getPercentageDiscount(), discount.getExpiryDate());
        discountRepository.save(newDiscount);
        return new ResponseEntity<Discount>(newDiscount, HttpStatus.CREATED);
    }
}
