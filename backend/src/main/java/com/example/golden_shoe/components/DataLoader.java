package com.example.golden_shoe.components;

import com.example.golden_shoe.models.Shoe;
import com.example.golden_shoe.repositories.OrderRepository;
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
    OrderRepository orderRepository;

    public DataLoader() {

    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        orderRepository.deleteAll();
        shoeRepository.deleteAll();

        Shoe shoe1 = new Shoe("All Stars", "Converse");
        shoe1.addAvailableSize("7", 20);
        shoe1.addAvailableSize("8", 1);
        shoe1.addAvailableSize("9", 5);

        Shoe shoe2 = new Shoe("Stan Smith", "Adidas");
        shoe2.addAvailableSize("6", 7);
        shoe2.addAvailableSize("7", 4);
        shoe2.addAvailableSize("11", 2);

        Shoe shoe3 = new Shoe("Gazelle", "Adidas");
        shoe3.addAvailableSize("6", 4);
        shoe3.addAvailableSize("8", 10);
        shoe3.addAvailableSize("10", 6);

        shoeRepository.save(shoe1);
        shoeRepository.save(shoe2);
        shoeRepository.save(shoe3);




        for (Shoe shoe : shoeRepository.findAll()){
            System.out.println(shoe);
        }
    }
}
