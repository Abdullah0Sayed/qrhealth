import axios from "axios";
import { useSelector } from "react-redux";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: false,
});

// Request
http.interceptors.request.use((config) => {
  const lang = localStorage.getItem("lang") || "ar";
  config.headers["Accept-Language"] = lang;
  return config;
});
// Response

export default http;
