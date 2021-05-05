package com.example.golden_shoe.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class ShoeTest {
    Shoe shoe1;

    @BeforeEach
    void setUp() {
        shoe1 = new Shoe("All Stars", "Converse", 52.00);
    }

    @Test
    void canGetName() {
        assertEquals("All Stars", shoe1.getName());
    }

    @Test
    void canGetPrice() {
        assertEquals(52.00, shoe1.getPrice(), 0.0);
    }

    @Test
    void canAddAvailableSize() {
        shoe1.addAvailableSize("5", 10);
        assertEquals(1, shoe1.getSizes().size());
    }

    @Test
    void canReduceStock() {
        shoe1.addAvailableSize("5", 10);
        shoe1.reduceStock("5", 2);
        assertEquals(8, shoe1.getSizes().get(0).get("5"));
    }

    @Test
    void canRemoveSizesWithoutStock() {
        shoe1.addAvailableSize("5", 0);
        shoe1.removeSizesWithoutStock();
        assertEquals(0, shoe1.getSizes().size());
    }

    @Test
    void canUpdatePurchasedStock() {
        shoe1.addAvailableSize("5", 3);
        shoe1.updatePurchasedStock("5", 3);
        assertEquals(0, shoe1.getSizes().size());


    }

}
