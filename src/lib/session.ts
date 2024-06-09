"use server";

import "server-only";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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

export async function logout() {
  const { destroy } = await getSession();

  destroy();

  redirect("/");
}
