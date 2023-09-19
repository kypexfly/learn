package com.ricardochu.sbstart.customer;

public record CustomerRegistrationRequest(
        String name,
        String email,
        Integer age) {

}
