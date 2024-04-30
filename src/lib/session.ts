"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

type SessionData = {
  id: number;
  name: string;
  email: string;
};

export async function getSession() {
  return await getIronSession<SessionData>(cookies(), {
    cookieName: process.env.NEXT_PUBLIC_TOKEN_COOKIE_NAME,
    password: process.env.AUTH_SECRET,
  });
}
