"use client";

import { useUserContext } from "@/app/contexts/getUser";
import { redirect } from "next/navigation";
import { useCallback } from "react";
import useAxios from "./useAxios";

const useUser = () => {
  const { user, setUser } = useUserContext();

  const axios = useAxios();

  if (!user) {
    axios
      .get("/api/v1/users/me")
      .then(({ data: { data } }) => {
        setUser({
          ...data,
          expired_at: new Date(new Date().getTime() + 1000 * 60 * 60 * 24),
        });
      })
      .catch(() => {
        setUser(null);
        redirect("/login");
      });
  }

  const resetUser = useCallback(() => {
    setUser(null);
  }, [setUser]);

  return { user, resetUser };
};

export default useUser;
