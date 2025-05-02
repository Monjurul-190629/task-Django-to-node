const { getVendorCommission, updateVendorCommission } = require("../services/vendorService");

const fetchVendorCommission = async (req, res) => {
    try {
        const commissionData = await getVendorCommission();
        if (!commissionData) {
            return res.status(404).json({ message: "No vendor commission data found" });
        }
        res.json({ vendor_commission: commissionData });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

const updateVendorCommission = async (req, res) => {
    const { vendor_name } = req.params;
    const { commission } = req.body;
    
    try {
        const updateResult = await updateVendorCommission(vendor_name, commission);
        if (!updateResult) {
            return res.status(404).json({ message: "Vendor not found" });
        }
        res.json({ message: "Vendor commission updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { fetchVendorCommission, updateVendorCommission };
