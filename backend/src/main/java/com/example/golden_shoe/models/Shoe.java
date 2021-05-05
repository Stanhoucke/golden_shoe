package com.example.golden_shoe.models;

import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.HashMap;

public class Shoe {
    @Id
    private String id;

    private String name;
    private String brand;
    private ArrayList<HashMap<String, Integer>> sizes;
    private double price;
    private ArrayList<String> imageUrls;

    public Shoe() {}

    public Shoe(String name, String brand, double price) {
        this.name = name;
        this.brand = brand;
        this.sizes = new ArrayList<HashMap<String, Integer>>();
        this.price = price;
        this.imageUrls = new ArrayList<String>();
    }

    public String toString() {
        return String.format(
                "Shoe[id=%s, name='%s', brand='%s', sizes='%s', price='%s]",
                id, name, brand, sizes, price);
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public ArrayList<HashMap<String, Integer>> getSizes() {
        return sizes;
    }

    public void setSizes(ArrayList<HashMap<String, Integer>> sizes) {
        this.sizes = sizes;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public ArrayList<String> getImageUrls() {
        return imageUrls;
    }

    public void setImageUrls(ArrayList<String> imageUrls) {
        this.imageUrls = imageUrls;
    }

    public void addImageUrl(String url) {
        this.imageUrls.add(url);
    }

    public void addAvailableSize(String size, Integer numberAvailable){
        HashMap<String, Integer> availableSizes = new HashMap<>();
        availableSizes.put(size, numberAvailable);
        this.sizes.add(availableSizes);
    }

    public void reduceStock(String checkSize, int amount) {
        for (HashMap<String, Integer> size : this.sizes) {
            if (size.containsKey(checkSize)){
                Integer stock = size.get(checkSize);
                if (stock >= amount) {
                    stock -= amount;
                    size.replace(checkSize, stock);
                }
            }
        }
    }

    public void removeSizesWithoutStock() {

        for (int i = 0; i < this.sizes.size(); i++) {
            if (this.sizes.get(i).containsValue(0)){
                this.sizes.remove(i);
            }
        }
    }

    public void updatePurchasedStock(String size, int amount) {
        reduceStock(size, amount);
        removeSizesWithoutStock();
    }
}
