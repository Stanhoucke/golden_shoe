package com.example.golden_shoe.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.Id;

public class Order {

    @JsonIgnoreProperties(value = {"sizes"})
    public Shoe shoe;

    public String size;
    public int quantity;
    public double price;


    public Order() {}

    public Order(Shoe shoe, String size, int quantity, double price) {
        this.shoe = shoe;
        this.size = size;
        this.quantity = quantity;
        this.price = price;
    }

}
