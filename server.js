const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const parcelRoutes = require("./routes/parcelRoutes");
const orderRoutes = require("./routes/orderRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/parcel", parcelRoutes);
app.use("/order", orderRoutes);
app.use("/notify", notificationRoutes);
app.use("/auth", authRoutes);
app.use("/customer", customerRoutes);
app.use("/sales", salesRoutes);
app.use("/vendor", vendorRoutes);
app.use('/api/orders', orderRoute);
app.use('/api', employeeRoute);
app.use('/api', customerRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
