import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 3 * 60 * 1000,
  headers: {
    "Content-Type": "application/json"
    // Add any other headers you need
  }
});

export default api;