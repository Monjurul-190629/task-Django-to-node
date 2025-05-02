const { getOrderStatusFromRedX } = require("../services/redxService");

const getOrderStatus = async (req, res) => {
    const { trackingId } = req.params;
    try {
        const orderStatus = await getOrderStatusFromRedX(trackingId);
        res.json(orderStatus);
    } catch (error) {
        res.status(500).send({ error: "Error fetching order status" });
    }
};

module.exports = { getOrderStatus };
