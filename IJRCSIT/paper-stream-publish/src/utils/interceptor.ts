import { baseUrl } from "@/utils/constants";
import axios from "axios";

 const api = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json"
    }
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("auth");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error: any) => Promise.reject(error)
)

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.warn("Unauthorized! You can redirect to login here.");
            // Optional: clear token, redirect, etc.
        }
        return Promise.reject(error);
    }
);

export default api;
