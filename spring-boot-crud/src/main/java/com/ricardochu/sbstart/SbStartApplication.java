package com.ricardochu.sbstart;

import com.ricardochu.sbstart.customer.Customer;
import com.ricardochu.sbstart.customer.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class SbStartApplication {

    public static void main(String[] args) {
        SpringApplication.run(SbStartApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(CustomerRepository customerRepository) {
        return args -> {
            List<Customer> customers = List.of(
                    new Customer(1, "Ricardo", "ricardo@gmail.com", 24),
                    new Customer(2, "Kamien", "kamien@gmail.com", 24)
            );

            customerRepository.saveAll(customers);
        };
    }

}
