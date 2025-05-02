const express = require('express');
const { getSalesData } = require('../controllers/order.controller');
const router = express.Router();

router.get('/sse/sales/:startDate/:endDate', getSalesData);

module.exports = router;
