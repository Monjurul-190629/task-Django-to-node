const { Sequelize } = require('sequelize');

// Initialize Sequelize instance
const sequelize = new Sequelize('postgres://username:password@localhost:5432/database_name');

const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = { sequelize, connectDb };
