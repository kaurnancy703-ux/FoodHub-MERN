const express = require("express");

const {
  createOrder,
  getMyOrders,
} = require("../controllers/orderController");

const router = express.Router();

// Create FoodHub order
router.post("/", createOrder);

// Get logged-in user's orders
router.get("/my-orders", getMyOrders);

module.exports = router;