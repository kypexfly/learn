package com.ricardochu.sbstart.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/customers")
public class CustomerController {

    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    List<Customer> getCustomers() {
        return customerService.getCustomers();
    }

    @GetMapping("{customerId}")
    Customer getCustomerById(@PathVariable(name = "customerId") Long customerId) {
        return customerService.getCustomerById(customerId);
    }

    @PostMapping
    void registerCustomer(@RequestBody CustomerRegistrationRequest registerRequest) {
        customerService.addCustomer(registerRequest);
    }

    @DeleteMapping("{customerId}")
    void deleteCustomer(@PathVariable(name = "customerId") Long customerId) {
        customerService.deleteCustomer(customerId);
    }

    @PutMapping("{customerId}")
    void updateCustomer(
            @PathVariable(name = "customerId") Long customerId,
            @RequestBody CustomerUpdateRequest updateRequest
    ) {
        customerService.updateCustomer(customerId, updateRequest);
    }

}
