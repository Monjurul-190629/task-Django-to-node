const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const CustomerDetails = sequelize.define('CustomerDetails', {
    customer_name: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    products: {
        type: DataTypes.JSONB, // Adjust data type as per your schema
    },
    price: {
        type: DataTypes.DECIMAL,
    },
}, {
    tableName: 'customerdetails',
    timestamps: false,
});

module.exports = CustomerDetails;
