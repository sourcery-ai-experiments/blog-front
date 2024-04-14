import axios from "axios";
import { Cookie } from "next/font/google";
import { redirect } from "next/navigation";
import { useMemo } from "react";

const useAxios = () => {
  return useMemo(() => {
    const clientAxios = axios.create();

    clientAxios.interceptors.request.use(
      (config) => {
        const token = document.cookie
          .split("; ")
          .find((c) => c.startsWith("_at="))
          ?.split("=")[1];
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    clientAxios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401) {
          redirect("/logout");
          return;
        }
        return error;
      }
    );

    return clientAxios;
  }, []);
};

export default useAxios;
