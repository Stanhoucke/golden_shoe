package com.example.golden_shoe.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;

public class PurchaseOrder {

    @Id
    public String id;

    public ArrayList<Order> orders;

    public PurchaseOrder() {
        this.orders = new ArrayList<>();
    }

    public String toString() {
        return String.format(
                "PurchaseOrder[id=%s, orders='%s']",
                id, orders);
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public ArrayList<Order> getOrders() {
        return orders;
    }

    public void setOrders(ArrayList<Order> orders) {
        this.orders = orders;
    }

    public void addOrder(Order order) {
        this.orders.add(order);
    }

    public void addOrders(ArrayList<Order> orders) {
        for (Order order : orders) {
            this.addOrder(order);
        }
    }
}
