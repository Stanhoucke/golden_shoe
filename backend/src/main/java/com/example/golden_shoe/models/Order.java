package com.example.golden_shoe.models;

import org.springframework.data.annotation.Id;

import java.util.ArrayList;

public class Order {

    @Id
    public String id;

    public Shoe shoe;
    public int size;
    public int quantity;


    public Order() {}

    public Order(Shoe shoe, int size, int quantity) {
        this.shoe = shoe;
        this.size = size;
        this.quantity = quantity;
    }

    public String toString() {
        return String.format(
                "Order[id=%s, shoe='%s, size='%s', quantity='%s']",
                id, shoe, size, quantity);
    }
}
