"use server";

import { apiFetch } from "@/lib/getFetch";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export const loginAction = async (_: any, formData: FormData) => {
  const session = await getSession();

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
