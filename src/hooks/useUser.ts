"use client";

import { atom, useRecoilState } from "recoil";
import useAxios from "./useAxios";
import { useCallback } from "react";

const userAtom = atom<User | null>({
  key: "user",
  default: null,
});

export const useUser = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const axios = useAxios();

  if (!user) {
    axios.get("/api/users/me").then(({ data: { data } }) => {
      setUser(data);
    });
  }

  const resetUser = useCallback(() => {
    setUser(null);
  }, [setUser]);

  return { user, resetUser };
};
