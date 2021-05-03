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
}
