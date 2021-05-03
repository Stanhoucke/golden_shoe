package com.example.golden_shoe.components;

import com.example.golden_shoe.models.Shoe;
import com.example.golden_shoe.repositories.ShoeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    ShoeRepository shoeRepository;

    public DataLoader() {

    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        shoeRepository.deleteAll();

        shoeRepository.save(new Shoe("All Stars", "Converse"));
        shoeRepository.save(new Shoe("Stan Smith", "Adidas"));
        shoeRepository.save(new Shoe("Gazelle", "Adidas"));


        for (Shoe shoe : shoeRepository.findAll()){
            System.out.println(shoe);
        }
    }
}
