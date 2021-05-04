package com.example.golden_shoe.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.Id;

public class Order {

    @JsonIgnoreProperties(value = {"sizes"})
    public Shoe shoe;

    public int size;
    public int quantity;
    public double price;


    public Order() {}

    public Order(Shoe shoe, int size, int quantity, double price) {
        this.shoe = shoe;
        this.size = size;
        this.quantity = quantity;
        this.price = price;
    }

}
