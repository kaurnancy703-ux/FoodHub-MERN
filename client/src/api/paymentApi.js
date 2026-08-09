import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
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