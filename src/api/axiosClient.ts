import axios from "axios";
import Cookies from "js-cookie";

const apiBase = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api/v1`
  : "/api/v1";

const axiosClient = axios.create({
  baseURL: apiBase,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    let token: string | null = null;

    // Prefer explicit localStorage token if present (legacy)
    try {
      token = localStorage.getItem("token");
    } catch (e) {
      token = null;
    }

    // Fallback: try to read token from cookie `currentUser`
    if (!token) {
      const cookie = Cookies.get("currentUser");
      if (cookie) {
        try {
          const parsed = JSON.parse(cookie);
          token = parsed?.token || null;
        } catch (e) {
          token = null;
        }
      }
    }

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;
