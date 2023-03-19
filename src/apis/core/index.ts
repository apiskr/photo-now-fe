import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const http = axios.create({
  headers: { Accept: "application/json" },
  baseURL: BASE_URL,
});
