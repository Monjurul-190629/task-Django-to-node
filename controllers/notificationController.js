const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
    ws.on("message", (message) => {
        console.log(`Received: ${message}`);
    });

    // Example of sending a message
    ws.send("Welcome to the order status updates!");
});

const sendNotificationToClients = (message) => {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ message }));
        }
    });
};

module.exports = { sendNotificationToClients };
