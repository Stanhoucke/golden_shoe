package com.example.golden_shoe.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class OrderTest {

    Order order1;
    Shoe shoe1;

    @BeforeEach
    void setUp() {
        shoe1 = new Shoe("All Stars", "Converse", 52.00);
        order1 = new Order(shoe1, "UK 7", 2);
    }

    @Test
    void canGetShoe(){
        assertEquals(shoe1, order1.getShoe());
    }

    @Test
    void canGetSize() {
        assertEquals("UK 7", order1.getSize());
    }

    @Test
    void canGetQuantity() {
        assertEquals(2, order1.getQuantity());
    }

    @Test
    void canGetPrice() {
        double expectedPrice = shoe1.getPrice() * order1.getQuantity();
        assertEquals(expectedPrice, order1.getPrice(), 0.00);
    }
}
