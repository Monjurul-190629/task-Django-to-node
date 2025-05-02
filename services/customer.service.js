const CustomerDetails = require('../models/customer.model');

// Function to get all customers
const getAllCustomers = async () => {
    try {
        const customers = await CustomerDetails.findAll();
        return customers;
    } catch (error) {
        throw new Error('Error fetching customers: ' + error.message);
    }
};

// Function to get a customer by name
const getCustomerByName = async (name) => {
    try {
        const customer = await CustomerDetails.findOne({
            where: { customer_name: name },
        });
        return customer;
    } catch (error) {
        throw new Error('Error fetching customer by name: ' + error.message);
    }
};

// Function to create a new customer
const createCustomer = async (data) => {
    try {
        const customer = await CustomerDetails.create(data);
        return customer;
    } catch (error) {
        throw new Error('Error creating customer: ' + error.message);
    }
};

module.exports = { getAllCustomers, getCustomerByName, createCustomer };
