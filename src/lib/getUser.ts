"use server";

import { redirect } from "next/navigation";
import parseJwt from "./parseJwt";
import { getToken } from "./token";

const getUser = () => {
  const token = getToken();

  if (!token) return null;

  const { user } = parseJwt(token);

  return user;
};

const getLoginUser = () => {
  const user = getUser();

  if (!user) {
    redirect("/login");
  }

  return user;
};

export default getUser;
