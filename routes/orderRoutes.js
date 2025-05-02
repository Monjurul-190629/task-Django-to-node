const express = require("express");
const { getOrderStatus } = require("../controllers/orderController");

const router = express.Router();

router.get("/tracking/:trackingId", getOrderStatus);

module.exports = router;
