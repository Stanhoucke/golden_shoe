package com.example.golden_shoe.models;

import com.example.golden_shoe.enums.ShoeSizeType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class PurchaseOrderTest {

    PurchaseOrder purchaseOrder1;
    Order order1;
    Order order2;
    Shoe shoe1;

    @BeforeEach
    void setUp() {
        shoe1 = new Shoe("All Stars", "Converse", 52.00);
        order1 = new Order(shoe1, ShoeSizeType.UK7.getUkSize(), 2);
        order2 = new Order(shoe1, ShoeSizeType.UK7.getUkSize(), 3);

        purchaseOrder1 = new PurchaseOrder();
        purchaseOrder1.addOrder(order1);
    }

    @Test
    void canGetOrdersSingle() {
        assertEquals(order1, purchaseOrder1.getOrders().get(0));
    }

    @Test
    void canGetOrdersMultiple() {
        purchaseOrder1.addOrder(order2);
        assertEquals(2, purchaseOrder1.getOrders().size());
    }

}
