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
        shoe1.addStock("7", 20);
        shoe1.addStock("8", 1);
        shoe1.addStock("9", 5);
        shoe1.addImageUrl("All_Stars_1.jpeg");
        shoe1.addImageUrl("All_Stars_2.jpeg");
        shoe1.addImageUrl("All_Stars_3.jpeg");

        Shoe shoe2 = new Shoe("Stan Smith", "Adidas", 75.00);
        shoe2.addStock("6", 7);
        shoe2.addStock("7", 4);
        shoe2.addStock("11", 2);
        shoe2.addImageUrl("Stan_Smith_1.jpeg");
        shoe2.addImageUrl("Stan_Smith_2.jpeg");
        shoe2.addImageUrl("Stan_Smith_3.jpeg");

        Shoe shoe3 = new Shoe("Gazelle", "Adidas", 70.00);
        shoe3.addStock("6", 4);
        shoe3.addStock("8", 10);
        shoe3.addStock("10", 6);
        shoe3.addImageUrl("Gazelle_1.jpeg");
        shoe3.addImageUrl("Gazelle_2.jpeg");
        shoe3.addImageUrl("Gazelle_3.jpeg");

        Shoe shoe4 = new Shoe("KD14", "Nike", 129.95);
        shoe4.addStock("6", 10);
        shoe4.addStock("9", 4);
        shoe4.addImageUrl("Kd14_1.jpeg");
        shoe4.addImageUrl("Kd14_2.png");
        shoe4.addImageUrl("Kd14_3.png");

        shoeRepository.save(shoe1);
        shoeRepository.save(shoe2);
        shoeRepository.save(shoe3);
        shoeRepository.save(shoe4);

        // Purchase Orders
        PurchaseOrder purchaseOrder1 = new PurchaseOrder();

        Order order1 = new Order(shoe1, "7", 2);
        Order order2 = new Order(shoe3, "8", 1);

        purchaseOrder1.orders.add(order1);
        purchaseOrder1.orders.add(order2);

        purchaseOrderRepository.save(purchaseOrder1);

    }
}
