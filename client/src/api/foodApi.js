import axios from "axios";

const API = axios.create({
  baseURL: "https://foodhub-mern-1q9n.onrender.com/api",
});

export const getFoods = () => {
  return API.get("/foods");
};