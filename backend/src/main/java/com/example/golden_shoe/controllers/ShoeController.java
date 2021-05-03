package com.example.golden_shoe.controllers;

import com.example.golden_shoe.models.Shoe;
import com.example.golden_shoe.repositories.ShoeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ShoeController {

    @Autowired
    ShoeRepository shoeRepository;

    @GetMapping(value = "/shoes")
    public ResponseEntity<List<Shoe>> getAllShoes(){
        return new ResponseEntity<List<Shoe>>(shoeRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/shoes/{id}")
    public ResponseEntity getShoe(@PathVariable String id){
        return new ResponseEntity<>(shoeRepository.findById(id), HttpStatus.OK);
    }
}
