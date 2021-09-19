package com.example.golden_shoe.interfaces;

import java.util.HashMap;

public interface IProduct {
    public void addImageUrl(String url);
    public void addStock(String sizeName, Integer amount);

    public void reduceStock(String sizeName, int amount);

    public void removeSizesWithoutStock();

    public void updatePurchasedStock(String size, int amount);

}
