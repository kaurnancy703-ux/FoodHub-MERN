import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Create Order
export const createOrder = (orderData) => {
  return API.post("/orders", orderData);
};

// Get My Orders
export const getMyOrders = (userId) => {
  return API.get("/orders/my-orders", {
    params: {
      user: userId,
    },
  });
};