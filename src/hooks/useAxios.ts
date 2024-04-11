import axios from "axios";
import { redirect } from "next/navigation";
import { useMemo } from "react";

const useAxios = () => {
  return useMemo(() => {
    const clientAxios = axios.create();

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
