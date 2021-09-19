package com.example.golden_shoe.models;

import org.apache.tomcat.jni.Local;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

public class DiscountTest {
    Discount discount1;
    LocalDateTime expiryDate1;

    @BeforeEach
    void setUp() {
        expiryDate1 = LocalDateTime.now().plusDays(1);
        discount1 = new Discount("GOLDEN50", 0.50, expiryDate1);
    }

    @Test
    void canGetName() {
        assertEquals("GOLDEN50", discount1.getName());
    }

    @Test
    void canGetPercentageDiscount() {
        assertEquals(0.50, discount1.getPercentageDiscount(), 0.00);
    }

    @Test
    void canGetExpiryDate() {
        assertEquals(expiryDate1, discount1.getExpiryDate());
    }

    @Test
    void canGetExpired_WhenIsNotExpired() {
        assertFalse(discount1.isExpired());
    }

    @Test
    void canGetExpired_WhenIsExpired() {
        LocalDateTime expiryDate2 = LocalDateTime.now().minusDays(10);
        discount1.setExpiryDate(expiryDate2);
        assertTrue(discount1.isExpired());
    }

}
