package com.example.golden_shoe.models;

import org.springframework.data.annotation.Id;

public class Shoe {
    @Id
    public String id;

    public String name;
    public String brand;

    public Shoe() {}

    public Shoe(String name, String brand) {
        this.name = name;
        this.brand = brand;
    }

    public String toString() {
        return String.format(
                "Shoe[id=%s, name='%s', brand='%s']",
                id, name, brand);
    }
}
