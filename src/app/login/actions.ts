"use server";

import { apiFetch } from "@/lib/getFetch";
import { redirect } from "next/navigation";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

type SessionData = {
  int: number;
  name: string;
  email: string;
  accessToken: string;
};

export const loginAction = async (_: any, formData: FormData) => {
  const session = await getIronSession<SessionData>(cookies(), {
    cookieName: process.env.NEXT_PUBLIC_TOKEN_COOKIE_NAME,
    password: process.env.AUTH_SECRET,
  });

  const formDataObject = Object.fromEntries(formData.entries());

  try {
    const response = await apiFetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: formDataObject.email,
        password: formDataObject.password,
      }),
    });

    const { data } = await response.json();

    const meResponse = await apiFetch("/api/user/me");
    const responseJson = await meResponse.json();

    console.log(responseJson);

    // setToken(data.access_token, data.expires_in);
    session.accessToken = data.access_token;
    await session.save();
  } catch (error) {
    console.log(error);
    return;
  }

  redirect(formDataObject.next?.toString() ?? "/");
};
