const { Client } = require("pg"); // Using pg for PostgreSQL

const getDbConnection = async () => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
    return client;
};

const getEmployeeByUsername = async (db, username) => {
    const res = await db.query("SELECT * FROM employees WHERE username = $1", [username]);
    return res.rows[0];
};

// Add more database functions for vendor commission, customer details, etc.

module.exports = { getDbConnection, getEmployeeByUsername };
