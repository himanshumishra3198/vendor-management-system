const mongoose = require("mongoose");

const HistoricalPerformanceSchema = new mongoose.Schema({
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor", // This should match the model name of the Vendor
    required: true,
  },
  date: {
    type: Date,
    required: true,
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

const HistoricalPerformance = mongoose.model(
  "HistoricalPerformance",
  HistoricalPerformanceSchema
);

module.exports = HistoricalPerformance;
