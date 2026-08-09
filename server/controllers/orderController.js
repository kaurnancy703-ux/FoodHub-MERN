const Order = require("../models/Order");

// ===============================
// Create Order
// ===============================
const createOrder = async (req, res) => {
  try {
    const {
      user,
      items,
      totalAmount,
      address,
    } = req.body;

    if (!user || !items || items.length === 0 || !totalAmount || !address) {
      return res.status(400).json({
        message: "Missing required order details",
      });
    }

    const order = await Order.create({
      user,
      items,
      totalAmount,
      address,
    });

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    console.error("Create Order Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};


// ===============================
// Get My Orders
// ===============================
const getMyOrders = async (req, res) => {
  try {
    const { user } = req.query;

    if (!user) {
      return res.status(400).json({
        message: "User ID is required",
      });
    }

    const orders = await Order.find({
      user,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("Get Orders Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  createOrder,
  getMyOrders,
};