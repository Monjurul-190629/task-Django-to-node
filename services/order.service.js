const Order = require('../models/order.model');

const fetchSalesData = async (startDate, endDate) => {
    try {
        const salesData = await Order.findAll({
            where: {
                created_at: {
                    [Op.gte]: new Date(startDate),
                    [Op.lte]: new Date(endDate),
                },
            },
            attributes: [
                [sequelize.fn('DATE_TRUNC', 'hour', sequelize.col('created_at')), 'hour'],
                'financial_status',
                [sequelize.fn('SUM', sequelize.col('total_amount')), 'total_sales'],
            ],
            group: [sequelize.fn('DATE_TRUNC', 'hour', sequelize.col('created_at')), 'financial_status'],
            order: [[sequelize.fn('DATE_TRUNC', 'hour', sequelize.col('created_at')), 'ASC']],
        });
        return salesData;
    } catch (error) {
        throw new Error('Error fetching sales data: ' + error.message);
    }
};

module.exports = { fetchSalesData };
