import axios from "axios";
import { baseURL } from "../constants/url";
import { login, refreshToken } from "./auth";
import { tokens } from "../utils/tokens";
import { redirect } from "react-router-dom";

export const API = axios.create({
  baseURL: baseURL,
  // withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
    "Accept-Language": "en-US,en;q=0.9",
  },
  auth: "",
});

// Interceptor for when a request is being made with this axios
// instance
API.interceptors.request.use(
  (config) => {
    const accessToken = tokens.getAccessToken();
    if (accessToken && config.url !== "/user/login/") {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor for when a response is received
API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === "/token/refresh/"
    ) {
      redirect("/login");
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      // get a new access and refresh token
      const { data } = await fileUploadApi.refreshToken(
        tokens.getRefreshToken()
      );

      if (data) {
        const { access, refresh } = data;

        tokens.setAccessToken(access);
        tokens.setRefreshToken(refresh);

        API.headers["Authorization"] = `Bearer ${tokens.getAccessToken()}`;

        return API(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

export const fileUploadApi = {
  login,
  refreshToken,
  FILEUPLOADAPI: API,
};
