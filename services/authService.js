const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { getEmployeeByUsername } = require("../services/databaseService");

const SECRET_KEY = "K8GsQ2tOXM9wz0a9lgRa8v1OdPQ5f6cX";
const ALGORITHM = "HS256";
const ACCESS_TOKEN_EXPIRE_MINUTES = 60;

const verifyPassword = (plain, hashed) => bcrypt.compare(plain, hashed);

const authenticateUser = async (db, username, password) => {
    const user = await getEmployeeByUsername(db, username);
    if (!user || !await verifyPassword(password, user.password)) {
        return null;
    }
    return user;
};

const createToken = (data, expiresIn = '60m') => {
    return jwt.sign(data, SECRET_KEY, { expiresIn });
};

module.exports = { authenticateUser, createToken };
