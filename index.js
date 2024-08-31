const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const vendorRoutes = require("./routes/vendor.routes");
const purchaseOrderRoutes = require("./routes/purchaseOrder.routes");
const authRoutes = require("./routes/auth.routes");
const authMiddleware = require("./middleware/auth");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// Auth routes
app.use("/auth", authRoutes);

// Use vendor routes with auth middleware
app.use("/vendors", authMiddleware, vendorRoutes);

// Use purchase order routes with auth middleware
app.use("/purchase-orders", authMiddleware, purchaseOrderRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
