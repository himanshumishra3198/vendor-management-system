const express = require("express");
const mongoose = require("mongoose");
const vendorRoutes = require("./routes/vendor.routes"); // Adjust the path as necessary
const purchaseOrderRoutes = require("./routes/purchaseOrder.routes"); // Adjust the path as necessary

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/yourDatabaseName", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// Use vendor routes
app.use("/vendors", vendorRoutes);

// Use purchase order routes
app.use("/purchase-orders", purchaseOrderRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
