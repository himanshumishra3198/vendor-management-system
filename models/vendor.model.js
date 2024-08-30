const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  contactDetails: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  vendorCode: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  onTimeDeliveryRate: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  qualityRatingAvg: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  averageResponseTime: {
    type: Number,
    required: true,
  },
  fulfillmentRate: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
});

const Vendor = mongoose.model("Vendor", VendorSchema);

module.exports = Vendor;
