package com.example.golden_shoe.models;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public class Discount {
    @Id
    private String id;

    private String name;
    private double percentageDiscount;
    private LocalDateTime expiryDate;
    private boolean expired;

    public Discount(String name, double percentageDiscount, LocalDateTime expiryDate) {
        this.name = name;
        this.percentageDiscount = percentageDiscount;
        this.expiryDate = expiryDate;

        this.updateExpired();
    }

    public Discount() {};

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

    public double getPercentageDiscount() {
        return percentageDiscount;
    }

    public void setPercentageDiscount(double percentageDiscount) {
        this.percentageDiscount = percentageDiscount;
    }

    public LocalDateTime getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(LocalDateTime expiryDate) {
        this.expiryDate = expiryDate;
        this.updateExpired();
    }

    public boolean isExpired() {
        return expired;
    }

    public void setExpired(boolean expired) {
        this.expired = expired;
    }

    private void updateExpired() {
        this.expired = !expiryDate.isAfter(LocalDateTime.now());
    }
}
