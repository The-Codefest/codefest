import axios from "axios";
import { baseURL } from "../utils/api";

export const APIS = axios.create({
  baseURL: baseURL,

  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en-US,en;q=0.9",
  },
  auth: "",
});
