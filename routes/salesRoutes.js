const express = require('express');
const { sseSales } = require('../controllers/salesController');
const router = express.Router();

router.get("/sse/sales/:start_date/:end_date", sseSales);

module.exports = router;
