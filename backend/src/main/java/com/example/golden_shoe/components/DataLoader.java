package com.example.golden_shoe.components;

import com.example.golden_shoe.enums.ShoeSizeType;
import com.example.golden_shoe.models.Discount;
import com.example.golden_shoe.models.Order;
import com.example.golden_shoe.models.PurchaseOrder;
import com.example.golden_shoe.models.Shoe;
import com.example.golden_shoe.repositories.DiscountRepository;
import com.example.golden_shoe.repositories.PurchaseOrderRepository;
import com.example.golden_shoe.repositories.ShoeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    ShoeRepository shoeRepository;
    @Autowired
    PurchaseOrderRepository purchaseOrderRepository;
    @Autowired
    DiscountRepository discountRepository;

    public DataLoader() {

    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        purchaseOrderRepository.deleteAll();
        shoeRepository.deleteAll();
        discountRepository.deleteAll();

        // Shoes
        Shoe shoe1 = new Shoe("All Stars", "Converse", 50.00, false);
        shoe1.addStock(ShoeSizeType.UK7.getUkSize(), 20);
        shoe1.addStock(ShoeSizeType.UK8.getUkSize(), 1);
        shoe1.addStock(ShoeSizeType.UK9.getUkSize(), 5);
        shoe1.addImageUrl("All_Stars_1.jpeg");
        shoe1.addImageUrl("All_Stars_2.jpeg");
        shoe1.addImageUrl("All_Stars_3.jpeg");

        Shoe shoe2 = new Shoe("Stan Smith", "Adidas", 75.00, true);
        shoe2.addStock(ShoeSizeType.UK6.getUkSize(), 7);
        shoe2.addStock(ShoeSizeType.UK7.getUkSize(), 4);
        shoe2.addStock(ShoeSizeType.UK11.getUkSize(), 2);
        shoe2.addImageUrl("Stan_Smith_1.jpeg");
        shoe2.addImageUrl("Stan_Smith_2.jpeg");
        shoe2.addImageUrl("Stan_Smith_3.jpeg");

        Shoe shoe3 = new Shoe("Gazelle", "Adidas", 70.00, false);
        shoe3.addStock(ShoeSizeType.UK6.getUkSize(), 4);
        shoe3.addStock(ShoeSizeType.UK8.getUkSize(), 10);
        shoe3.addStock(ShoeSizeType.UK10.getUkSize(), 6);
        shoe3.addImageUrl("Gazelle_1.jpeg");
        shoe3.addImageUrl("Gazelle_2.jpeg");
        shoe3.addImageUrl("Gazelle_3.jpeg");

        Shoe shoe4 = new Shoe("KD14", "Nike", 129.95, true);
        shoe4.addStock(ShoeSizeType.UK6.getUkSize(), 10);
        shoe4.addStock(ShoeSizeType.UK9.getUkSize(), 4);
        shoe4.addImageUrl("Kd14_1.jpeg");
        shoe4.addImageUrl("Kd14_2.png");
        shoe4.addImageUrl("Kd14_3.png");

        shoeRepository.save(shoe1);
        shoeRepository.save(shoe2);
        shoeRepository.save(shoe3);
        shoeRepository.save(shoe4);

        // Discounts
        Discount discount1 = new Discount("GOLDEN10", 0.10, LocalDateTime.now().plusDays(2));
        Discount discount2 = new Discount("GOLDEN30", 0.30, LocalDateTime.now().minusDays(1));

        discountRepository.save(discount1);
        discountRepository.save(discount2);

        // Purchase Orders
        PurchaseOrder purchaseOrder1 = new PurchaseOrder();

        Order order1 = new Order(shoe1, ShoeSizeType.UK7.getUkSize(), 2);
        Order order2 = new Order(shoe3, ShoeSizeType.UK8.getUkSize(), 1);

        purchaseOrder1.addOrder(order1);
        purchaseOrder1.addOrder(order2);

        purchaseOrderRepository.save(purchaseOrder1);

    }
}
