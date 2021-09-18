package com.example.golden_shoe.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.Id;

public class Order {

    @JsonIgnoreProperties(value = {"sizes", "imageUrls"})
    public Shoe shoe;

    public String size;
    public int quantity;
    public double price;


    public Order() {}

    public Order(Shoe shoe, String size, int quantity) {
        this.shoe = shoe;
        this.size = size;
        this.quantity = quantity;
        this.price = getPrice();
    }

    public Shoe getShoe() {
        return shoe;
    }

    public void setShoe(Shoe shoe) {
        this.shoe = shoe;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return this.getShoe().getPrice() * this.quantity;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
