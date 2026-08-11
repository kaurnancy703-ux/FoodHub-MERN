import axios from "axios";


const API = axios.create({
  baseURL: "https://foodhub-mern-1q9n.onrender.com/api",
});


export const registerUser = (userData) => {
  return API.post("/auth/register", userData);
};


export const loginUser = (userData) => {
  return API.post("/auth/login", userData);
};