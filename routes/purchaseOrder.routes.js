const express = require("express");
const PurchaseOrder = require("../models/purchaseOrder.model");
const router = express.Router();

// POST /purchase-orders: Create a new purchase order
router.post("/", async (req, res) => {
  try {
    const purchaseOrder = new PurchaseOrder(req.body);
    await purchaseOrder.save();
    res.status(201).json(purchaseOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET /purchase-orders: List all purchase orders, optionally filtered by vendor
router.get("/", async (req, res) => {
  try {
    const filter = {};
    if (req.query.vendorId) {
      filter.vendor = req.query.vendorId;
    }
    const purchaseOrders = await PurchaseOrder.find(filter).populate("vendor"); // Populate vendor details
    res.status(200).json(purchaseOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /purchase-orders/:poId: Retrieve details of a specific purchase order
router.get("/:poId", async (req, res) => {
  try {
    const purchaseOrder = await PurchaseOrder.findById(
      req.params.poId
    ).populate("vendor");
    if (!purchaseOrder) {
      return res.status(404).json({ message: "Purchase order not found" });
    }
    res.status(200).json(purchaseOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT /purchase-orders/:poId: Update a purchase order
router.put("/:poId", async (req, res) => {
  try {
    const purchaseOrder = await PurchaseOrder.findByIdAndUpdate(
      req.params.poId,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).populate("vendor");
    if (!purchaseOrder) {
      return res.status(404).json({ message: "Purchase order not found" });
    }
    res.status(200).json(purchaseOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /purchase-orders/:poId: Delete a purchase order
router.delete("/:poId", async (req, res) => {
  try {
    const purchaseOrder = await PurchaseOrder.findByIdAndDelete(
      req.params.poId
    );
    if (!purchaseOrder) {
      return res.status(404).json({ message: "Purchase order not found" });
    }
    res.status(200).json({ message: "Purchase order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
