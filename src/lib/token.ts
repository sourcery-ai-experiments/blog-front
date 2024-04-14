import "server-only";
import { cookies } from "next/headers";

export const getToken = () => {
  return cookies().get(process.env.NEXT_PUBLIC_TOKEN_COOKIE_NAME)?.value;
};

export const deleteToken = () => {
  cookies().delete(process.env.NEXT_PUBLIC_TOKEN_COOKIE_NAME);
};

export const setToken = (token: string, expiresIn: number) => {
  cookies().set(process.env.NEXT_PUBLIC_TOKEN_COOKIE_NAME, token, {
    path: "/",
    expires: new Date(new Date().getTime() + 1000 * expiresIn),
  });
};
