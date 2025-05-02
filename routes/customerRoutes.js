const express = require('express');
const { fetchCustomerDetails } = require('../controllers/customerController');
const router = express.Router();

router.get("/customer-details", fetchCustomerDetails);

module.exports = router;
