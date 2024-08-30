const mongoose = require("mongoose");

const PurchaseOrderSchema = new mongoose.Schema({
  poNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor", // This should match the model name of the Vendor
    required: true,
  },
  orderDate: {
    type: Date,
    required: true,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
  items: {
    type: mongoose.Schema.Types.Mixed, // Allows storage of any data type, JSON in this case
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "completed", "canceled"], // Limits to specific values
  },
  qualityRating: {
    type: Number,
    min: 0,
    max: 5,
    default: null, // Indicates this field can be nullable
  },
  issueDate: {
    type: Date,
    required: true,
  },
  acknowledgmentDate: {
    type: Date,
    default: null, // Nullable field
  },
});

const PurchaseOrder = mongoose.model("PurchaseOrder", PurchaseOrderSchema);

module.exports = PurchaseOrder;
