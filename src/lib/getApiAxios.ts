"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { useMemo } from "react";
import "server-only";

const apiAxios = axios.create({ baseURL: process.env.BASE_API_URL });

apiAxios.interceptors.request.use((config) => {
  const token = cookies().get(process.env.TOKEN_COOKIE_NAME)?.value;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// apiAxios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 401) {
//     }

//     return error;
//   }
// );

const getApiAxios = async () => {
  return apiAxios;
};

export default getApiAxios;
