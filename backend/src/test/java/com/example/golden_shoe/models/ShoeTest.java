package com.example.golden_shoe.models;

import com.example.golden_shoe.enums.ShoeSizeType;
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
    void canAddStock() {
        shoe1.addStock(ShoeSizeType.UK5.getUkSize(), 10);
        assertEquals(1, shoe1.getSizes().size());
    }

    @Test
    void canAddStock_WhenSizeExists() {
        shoe1.addStock(ShoeSizeType.UK5.getUkSize(), 3);
        shoe1.addStock(ShoeSizeType.UK7.getUkSize(), 5);
        shoe1.addStock(ShoeSizeType.UK5.getUkSize(), 2);
        shoe1.addStock(ShoeSizeType.UK7.getUkSize(), 5);
        assertEquals(2, shoe1.getSizes().size());
        assertEquals(5, shoe1.getSizes().get(0).get("UK 5"));
        assertEquals(10, shoe1.getSizes().get(1).get("UK 7"));

    }

    @Test
    void canReduceStock() {
        shoe1.addStock(ShoeSizeType.UK5.getUkSize(), 10);
        shoe1.reduceStock(ShoeSizeType.UK5.getUkSize(), 2);
        assertEquals(8, shoe1.getSizes().get(0).get("UK 5"));
    }

    @Test
    void canRemoveSizesWithoutStock() {
        shoe1.addStock(ShoeSizeType.UK5.getUkSize(), 0);
        shoe1.removeSizesWithoutStock();
        assertEquals(0, shoe1.getSizes().size());
    }

    @Test
    void canUpdatePurchasedStock() {
        shoe1.addStock(ShoeSizeType.UK5.getUkSize(), 3);
        shoe1.updatePurchasedStock(ShoeSizeType.UK5.getUkSize(), 3);
        assertEquals(0, shoe1.getSizes().size());


    }

}
