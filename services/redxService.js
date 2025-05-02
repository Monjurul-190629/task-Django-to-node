const axios = require("axios");

const REDX_API_TOKEN = "your_redx_api_token";

const getOrderStatusFromRedX = async (trackingId) => {
    try {
        const response = await axios.get(`https://openapi.redx.com.bd/v1.0.0-beta/parcel/track/${trackingId}`, {
            headers: {
                "API-ACCESS-TOKEN": `Bearer ${REDX_API_TOKEN}`,
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        throw new Error("Error fetching order status from RedX");
    }
};

module.exports = { getOrderStatusFromRedX };
