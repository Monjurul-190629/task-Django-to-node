const express = require("express");
const { sendNotificationToClients } = require("../controllers/notificationController");

const router = express.Router();

router.get("/order-updates", (req, res) => {
    const message = "Order status changed!";
    sendNotificationToClients(message);
    res.json({ message });
});

module.exports = router;
