const { getDbConnection } = require("../services/databaseService");

const fetchParcelStatus = async (req, res) => {
    const client = await getDbConnection();
    try {
        const result = await client.query("SELECT order_name, vendor_names, customer_name, phone_number, tracking_id, parcel_status FROM orders");
        res.json({ parcel_status: result.rows });
    } catch (error) {
        res.status(500).send({ error: "Failed to fetch parcel status" });
    } finally {
        client.end();
    }
};

module.exports = { fetchParcelStatus };
