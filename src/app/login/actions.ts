"use server";

import { apiFetch } from "@/lib/getFetch";
import { setToken } from "@/lib/token";
import { redirect } from "next/navigation";

export const loginAction = async (_: any, formData: FormData) => {
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

    setToken(data.access_token, data.expires_in);
  } catch (error) {
    console.log(error);
    return;
  }

  redirect(formDataObject.next?.toString() ?? "/");
};
