const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Order = sequelize.define('Order', {
    // Define columns
    order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    financial_status: {
        type: DataTypes.STRING,
    },
    total_amount: {
        type: DataTypes.DECIMAL,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'orders', // Ensure the table name is the same
    timestamps: false,   // Set to false if no timestamps like 'created_at' and 'updated_at'
});

module.exports = Order;
