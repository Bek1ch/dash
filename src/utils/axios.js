import axios from "axios";
import { TokenService } from "./token.service";

const axiosInstance = axios.create({
  baseURL: "/api",
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = TokenService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        TokenService.removeToken();
        window.location.href = "/login";
      } else if (status === 403) {
        console.error("Access denied");
        TokenService.removeToken();
        window.location.href = "/login";
      } else if (status === 404) {
        console.error("Resource not found");
        TokenService.removeToken();
        window.location.href = "/login";
      } else if (status >= 500) {
        console.error("Server error");
        TokenService.removeToken();
        window.location.href = "/login";
      }
    } else if (error.request) {
      console.error("No response from server");
      window.location.href = "/login";
    } else {
      console.error("Error setting up request:", error.message);
    }

    return Promise.reject(error);
  }
);

export { axiosInstance as axios };
