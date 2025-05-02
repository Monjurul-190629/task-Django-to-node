const { getAllCustomers, getCustomerByName, createCustomer } = require('../services/customer.service');

// Controller function to get all customers
const getCustomers = async (req, res) => {
    try {
        const customers = await getAllCustomers();
        res.json({ customers });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to get a customer by name
const getCustomer = async (req, res) => {
    const { name } = req.params;
    try {
        const customer = await getCustomerByName(name);
        if (customer) {
            res.json({ customer });
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to create a new customer
const addCustomer = async (req, res) => {
    const data = req.body;
    try {
        const customer = await createCustomer(data);
        res.status(201).json({ customer });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getCustomers, getCustomer, addCustomer };
