package com.ricardochu.sbstart.customer;

public record CustomerUpdateRequest(
        String name,
        String email,
        Integer age
) {
}
