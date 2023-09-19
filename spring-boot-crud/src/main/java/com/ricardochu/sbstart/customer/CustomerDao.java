package com.ricardochu.sbstart.customer;

import java.util.List;
import java.util.Optional;

public interface CustomerDao {
    List<Customer> selectAll();
    Optional<Customer> selectById(Long id);
    void insertOne(Customer customer);
    void deleteById(Long id);
    boolean existsPersonWithEmail(String email);
    boolean existPersonWithId(Long id);
    void updateCustomer(Customer customer);
}
