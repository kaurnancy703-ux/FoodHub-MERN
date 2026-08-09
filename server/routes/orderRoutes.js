const express = require("express");

const {
  createOrder,
} = require("../controllers/orderController");

const router = express.Router();

// Create FoodHub order
router.post("/", createOrder);

module.exports = router;