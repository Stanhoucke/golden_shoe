package com.example.golden_shoe.enums;

public enum ShoeSizeType {
    UK5("UK 5"),
    UK6("UK 6"),
    UK7("UK 7"),
    UK8("UK 8"),
    UK9("UK 9"),
    UK10("UK 10"),
    UK11("UK 11"),
    UK12("UK 12");

    private final String ukSize;

    ShoeSizeType(String ukSize) {
        this.ukSize = ukSize;
    }

    public String getUkSize() {
        return ukSize;
    }
}
