const express = require('express');
const { getCustomers, getCustomer, addCustomer } = require('../controllers/customer.controller');
const router = express.Router();

// Routes for customer operations
router.get('/customers', getCustomers);
router.get('/customers/:name', getCustomer);
router.post('/customers', addCustomer);

module.exports = router;
