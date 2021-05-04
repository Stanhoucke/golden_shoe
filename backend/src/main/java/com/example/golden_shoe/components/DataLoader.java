package com.example.golden_shoe.components;

import com.example.golden_shoe.models.Order;
import com.example.golden_shoe.models.PurchaseOrder;
import com.example.golden_shoe.models.Shoe;
import com.example.golden_shoe.repositories.PurchaseOrderRepository;
import com.example.golden_shoe.repositories.ShoeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    ShoeRepository shoeRepository;
    @Autowired
    PurchaseOrderRepository purchaseOrderRepository;

    public DataLoader() {

    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        purchaseOrderRepository.deleteAll();
        shoeRepository.deleteAll();

        // Shoes
        Shoe shoe1 = new Shoe("All Stars", "Converse", 52.00);
        shoe1.addAvailableSize("7", 20);
        shoe1.addAvailableSize("8", 1);
        shoe1.addAvailableSize("9", 5);

        Shoe shoe2 = new Shoe("Stan Smith", "Adidas", 75.00);
        shoe2.addAvailableSize("6", 7);
        shoe2.addAvailableSize("7", 4);
        shoe2.addAvailableSize("11", 2);

        Shoe shoe3 = new Shoe("Gazelle", "Adidas", 70.00);
        shoe3.addAvailableSize("6", 4);
        shoe3.addAvailableSize("8", 10);
        shoe3.addAvailableSize("10", 6);

        shoeRepository.save(shoe1);
        shoeRepository.save(shoe2);
        shoeRepository.save(shoe3);

        for (Shoe shoe : shoeRepository.findAll()){
            System.out.println(shoe);
        }

        // Purchase Orders
        PurchaseOrder purchaseOrder1 = new PurchaseOrder();

        Order order1 = new Order(shoe1, 7, 2, 59.95);
        Order order2 = new Order(shoe3, 8, 1, 30.00);

        purchaseOrder1.orders.add(order1);
        purchaseOrder1.orders.add(order2);

        purchaseOrderRepository.save(purchaseOrder1);

    }
}
