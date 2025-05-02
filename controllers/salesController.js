const { Client } = require("pg");
const { EventSourceResponse } = require("eventsource-response");

const sseSales = async (req, res) => {
    const { start_date, end_date } = req.params;
    const query = `
        SELECT DATE_TRUNC('hour', created_at) AS hour, 
               financial_status, 
               SUM(total_amount) AS total_sales
        FROM orders
        WHERE created_at >= $1 AND created_at <= $2
        GROUP BY DATE_TRUNC('hour', created_at), financial_status
        ORDER BY hour;
    `;
    const client = await getDbConnection();
    
    const eventGenerator = async () => {
        try {
            const result = await client.query(query, [start_date, end_date]);

            let data = [];
            result.rows.forEach(row => {
                data.push({
                    hour: row.hour.toISOString(),
                    financial_status: row.financial_status,
                    total_sales: row.total_sales,
                });
            });

            yield `data: ${JSON.stringify(data)}\n\n`;
        } catch (e) {
            yield `data: Error fetching data: ${e.message}\n\n`;
        }
    };

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    return new EventSourceResponse(eventGenerator());
};

module.exports = { sseSales };
