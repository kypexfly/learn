package com.ricardochu.sbstart.customer;

import com.ricardochu.sbstart.exception.DuplicateResourceException;
import com.ricardochu.sbstart.exception.RequestValidationException;
import com.ricardochu.sbstart.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    private final CustomerDao customerDao;


    public CustomerService(@Qualifier("jpa") CustomerDao customerDao) {
        this.customerDao = customerDao;
    }

    List<Customer> getCustomers() {
        return customerDao.selectAll();
    }

    Customer getCustomerById(Long id) {
        return customerDao.selectById(id).orElseThrow(
                () -> new ResourceNotFoundException("Customer with id [%s] not found.".formatted(id))
        );
    }

    void addCustomer(
            CustomerRegistrationRequest customerRegistrationRequest
    ) {
        if (customerDao.existsPersonWithEmail(customerRegistrationRequest.email())) {
            throw new DuplicateResourceException("Email already taken.");
        }

        customerDao.insertOne(
                new Customer(
                        customerRegistrationRequest.name(),
                        customerRegistrationRequest.email(),
                        customerRegistrationRequest.age()
                )
        );
    }

    void deleteCustomer(Long id) {
        if (!customerDao.existPersonWithId(id)) {
            throw new ResourceNotFoundException(
                    "Customer with id [%s] not found.".formatted(id)
            );
        }

        customerDao.deleteById(id);

    }

    void updateCustomer(Long id, CustomerUpdateRequest updateRequest) {
        Customer customer = getCustomerById(id);
        boolean changes = false;

        if (updateRequest.name() != null && !updateRequest.name().equals(customer.getName())) {
            customer.setName(updateRequest.name());
            changes = true;
        }

        if (updateRequest.age() != null && !updateRequest.age().equals(customer.getAge())) {
            customer.setAge(updateRequest.age());
            changes = true;
        }

        if (updateRequest.email() != null && !updateRequest.email().equals(customer.getEmail())) {
            if (customerDao.existsPersonWithEmail(updateRequest.email())) {
                throw new DuplicateResourceException(
                        "Email already taken."
                );
            }
            customer.setEmail(updateRequest.email());
            changes = true;
        }

        if (!changes) {
            throw new RequestValidationException("No data changes found.");
        }

        customerDao.updateCustomer(customer);

    }


}
