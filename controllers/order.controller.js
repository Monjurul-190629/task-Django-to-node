const { fetchSalesData } = require('../services/order.service');

const getSalesData = async (req, res) => {
    const { startDate, endDate } = req.params;
    try {
        const salesData = await fetchSalesData(startDate, endDate);
        res.json({ salesData });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getSalesData };
