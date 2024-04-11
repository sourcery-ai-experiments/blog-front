"use server";

import apiAxios from "@/lib/apiAxios";
import { setToken } from "@/lib/token";
import { redirect } from "next/navigation";

export const loginAction = async (_: any, formData: FormData) => {
  try {
    const {
      data: { data },
    } = await apiAxios.post(
      `${process.env.BASE_API_URL}/auth/login`,
      formData,
      {}
    );

    setToken(data.access_token, data.expires_in);
  } catch (error) {
    console.log(error);
    return;
  }

  redirect("/");
};
