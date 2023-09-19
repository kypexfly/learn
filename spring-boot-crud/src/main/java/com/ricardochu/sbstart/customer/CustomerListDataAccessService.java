package com.ricardochu.sbstart.customer;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository("list")
public class CustomerListDataAccessService implements CustomerDao {

    private List<Customer> customers = new ArrayList<Customer>(
            List.of(
                    new Customer(1, "Ricardo", "ricardo@gmail.com", 24),
                    new Customer(2, "Kamien", "kamien@gmail.com", 24)
            )
    );

    public CustomerListDataAccessService() {
    }

    @Override
    public List<Customer> selectAll() {
        return customers;
    }

    @Override
    public Optional<Customer> selectById(Long id) {
        return customers.stream().filter(c -> c.getId() == id).findFirst();
    }

    @Override
    public void insertOne(Customer customer) {
        customers.add(
                new Customer(
                        customers.get(customers.size() - 1).getId() + 1,
                        customer.getName(),
                        customer.getEmail(),
                        customer.getAge()
                )
        );
    }

    @Override
    public boolean existsPersonWithEmail(String email) {
        return customers.stream().anyMatch(
                c -> c.getEmail().equals(email)
        );
    }

    @Override
    public void deleteById(Long id) {
        customers.removeIf(c -> c.getId() == id);
    }

    @Override
    public boolean existPersonWithId(Long id) {
        return customers.stream().anyMatch(
                c -> c.getId() == id
        );
    }

    @Override
    public void updateCustomer(Customer customer) {
        Customer updateCustomer = customers.stream().filter(
                c -> c.getId() == customer.getId()
        ).findFirst().orElse(null);

        assert updateCustomer != null;
        updateCustomer.setName(customer.getName());
        updateCustomer.setEmail(customer.getEmail());
        updateCustomer.setAge(customer.getAge());

    }
}
