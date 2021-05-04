package com.example.golden_shoe.models;

import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.HashMap;

public class Shoe {
    @Id
    public String id;

    public String name;
    public String brand;
    public ArrayList<HashMap<String, Integer>> sizes;
    public double price;

    public Shoe() {}

    public Shoe(String name, String brand, double price) {
        this.name = name;
        this.brand = brand;
        this.sizes = new ArrayList<HashMap<String, Integer>>();
        this.price = price;
    }

    public String toString() {
        return String.format(
                "Shoe[id=%s, name='%s', brand='%s', sizes='%s', price='%s]",
                id, name, brand, sizes, price);
    }

    public void addAvailableSize(String size, Integer numberAvailable){
        HashMap<String, Integer> availableSizes = new HashMap<>();
        availableSizes.put(size, numberAvailable);
        this.sizes.add(availableSizes);
    }
}
