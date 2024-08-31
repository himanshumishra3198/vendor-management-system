const mongoose = require("mongoose");
const Vendor = require("./vendor.model");

const PurchaseOrderSchema = new mongoose.Schema({
  poNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
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
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "completed", "canceled"],
  },
  qualityRating: {
    type: Number,
    min: 0,
    max: 5,
    default: null,
  },
  issueDate: {
    type: Date,
    required: true,
  },
  acknowledgmentDate: {
    type: Date,
    default: null,
  },
});

// Helper function to calculate and update vendor metrics
async function updateVendorMetrics(vendorId) {
  const purchaseOrders = await PurchaseOrder.find({ vendor: vendorId });
  const totalPOs = purchaseOrders.length;
  const completedPOs = purchaseOrders.filter((po) => po.status === "completed");
  const totalCompletedPOs = completedPOs.length;

  // Calculate On-Time Delivery Rate
  const onTimeDeliveries = completedPOs.filter(
    (po) => po.deliveryDate && po.deliveryDate <= po.orderDate
  ).length;
  const onTimeDeliveryRate =
    totalCompletedPOs > 0 ? (onTimeDeliveries / totalCompletedPOs) * 100 : 0;

  // Calculate Quality Rating Average
  const qualityRatings = completedPOs
    .map((po) => po.qualityRating)
    .filter((rating) => rating !== null);

  const qualityRatingAvg =
    qualityRatings.length > 0
      ? qualityRatings.reduce((acc, rating) => acc + rating, 0) /
        qualityRatings.length
      : 0;

  // Calculate Average Response Time
  const responseTimes = purchaseOrders
    .map((po) =>
      po.acknowledgmentDate ? po.acknowledgmentDate - po.issueDate : null
    )
    .filter((time) => time !== null);
  const averageResponseTime =
    responseTimes.length > 0
      ? responseTimes.reduce((acc, time) => acc + time, 0) /
        responseTimes.length
      : 0;

  // Calculate Fulfillment Rate
  const fulfillmentRate =
    totalPOs > 0 ? (totalCompletedPOs / totalPOs) * 100 : 0;

  // Update Vendor Metrics
  await Vendor.findByIdAndUpdate(vendorId, {
    onTimeDeliveryRate,
    qualityRatingAvg,
    averageResponseTime,
    fulfillmentRate,
  });
}

// Update metrics after a PO is saved
PurchaseOrderSchema.post("save", function () {
  updateVendorMetrics(this.vendor);
});

// Update metrics after a PO is updated
PurchaseOrderSchema.post("findOneAndUpdate", function (doc) {
  if (doc) {
    updateVendorMetrics(doc.vendor);
  }
});

// Update metrics after a PO is deleted
PurchaseOrderSchema.post("findOneAndDelete", function (doc) {
  if (doc) {
    updateVendorMetrics(doc.vendor);
  }
});

const PurchaseOrder = mongoose.model("PurchaseOrder", PurchaseOrderSchema);

module.exports = PurchaseOrder;
