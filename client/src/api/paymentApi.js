import axios from "axios";

const API = axios.create({
  baseURL: "https://foodhub-mern-1q9n.onrender.com/api",
});

export const createPaymentOrder = (amount) => {
  return API.post("/payment/create-order", {
    amount,
  });
};

export const verifyPayment = (paymentData) => {
  return API.post(
    "/payment/verify-payment",
    paymentData
  );
};