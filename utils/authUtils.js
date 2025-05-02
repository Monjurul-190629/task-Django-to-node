const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
    try {
        return jwt.verify(token, "K8GsQ2tOXM9wz0a9lgRa8v1OdPQ5f6cX");
    } catch (err) {
        return null;
    }
};

module.exports = { verifyToken };
