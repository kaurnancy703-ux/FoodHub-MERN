import axios from "axios";

const API = axios.create({
  baseURL: "https://foodhub-mern-1q9n.onrender.com/api",
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