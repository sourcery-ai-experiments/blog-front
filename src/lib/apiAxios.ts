import axios from "axios";
import { redirect } from "next/navigation";
import "server-only";
import { getToken } from "./token";

const apiAxios = axios.create({ baseURL: process.env.BASE_API_URL });

apiAxios.interceptors.request.use((config) => {
  console.log(config.baseURL, config.url);

  const token = getToken();
  config.headers.Authorization = `Bearer ${token}`;
  config.headers["Content-Type"] = "application/json";
  return config;
});

apiAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      redirect("/401");
    }

    return error;
  }
);

export default apiAxios;
