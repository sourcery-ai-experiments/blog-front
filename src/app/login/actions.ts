"use server";

import getApiAxios from "@/lib/getApiAxios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const loginAction = async (_: any, formData: FormData) => {
  const apiAxios = await getApiAxios();
  try {
    const {
      data: { data },
    } = await apiAxios.post(
      `${process.env.BASE_API_URL}/auth/login`,
      formData,
      {}
    );
    console.log(data);

    cookies().set(process.env.TOKEN_COOKIE_NAME, data.access_token, {
      path: "/",
      expires: new Date(new Date().getTime() + 1000 * data.expires_in),
    });
  } catch (error) {
    console.log(error);
    return;
  }

  redirect("/");
};
