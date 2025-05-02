const express = require("express");
const { fetchParcelStatus } = require("../controllers/parcelController");

const router = express.Router();

router.get("/status", fetchParcelStatus);

module.exports = router;
