const express = require('express');
const { fetchVendorCommission, updateVendorCommission } = require('../controllers/vendorController');
const router = express.Router();

router.get("/vendor-commission", fetchVendorCommission);
router.put("/vendor-commission/update/:vendor_name/commission", updateVendorCommission);

module.exports = router;
