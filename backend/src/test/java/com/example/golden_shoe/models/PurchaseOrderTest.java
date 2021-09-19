package com.example.golden_shoe.models;

import com.example.golden_shoe.enums.ShoeSizeType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

public class PurchaseOrderTest {

    PurchaseOrder purchaseOrder1;
    Order order1;
    Order order2;
    Shoe shoe1;
    Discount discount1;
    Discount discount2;
    LocalDateTime expiryDate1;

    @BeforeEach
    void setUp() {
        shoe1 = new Shoe("All Stars", "Converse", 52.00, false);
        order1 = new Order(shoe1, ShoeSizeType.UK7.getUkSize(), 2);
        order2 = new Order(shoe1, ShoeSizeType.UK7.getUkSize(), 3);

        purchaseOrder1 = new PurchaseOrder();
        purchaseOrder1.addOrder(order1);

        expiryDate1 = LocalDateTime.now().plusDays(1);
        discount1 = new Discount("GOLDEN50", 0.50, expiryDate1);
        discount2 = new Discount("GOLDEN50", 0.10, expiryDate1);
    }

    @Test
    void canGetOrdersSingle() {
        assertEquals(order1, purchaseOrder1.getOrders().get(0));
    }

    @Test
    void canAddOrder() {
        purchaseOrder1.addOrder(order2);
        assertEquals(2, purchaseOrder1.getOrders().size());
    }

    @Test
    void canGetOrdersMultiple() {
        purchaseOrder1.addOrder(order2);
        purchaseOrder1.addOrder(order2);
        assertEquals(3, purchaseOrder1.getOrders().size());
    }

    @Test
    void canGetTotal() {
        assertEquals(104.00, purchaseOrder1.getTotal(), 0.00);
    }

    @Test
    void addOrderUpdatesTotal() {
        purchaseOrder1.addOrder(order2);
        assertEquals(260.00, purchaseOrder1.getTotal(), 0.00);
    }

    @Test
    void hasDiscount() {
        purchaseOrder1.setDiscount(discount1);
        assertEquals("GOLDEN50", purchaseOrder1.getDiscount().getName());
    }
    @Test
    void hasNoDiscount() {
        assertNull(purchaseOrder1.getDiscount());
    }

    @Test
    void canApply50DiscountToTotal() {
        purchaseOrder1.setDiscount(discount1);
        assertEquals(52.00, purchaseOrder1.getTotal(), 0.00);
    }

    @Test
    void canApply10DiscountToTotal() {
        purchaseOrder1.setDiscount(discount2);
        assertEquals(93.60, purchaseOrder1.getTotal(), 0.00);
    }



}
