"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import "server-only";

const getFetch = (baseUrl?: string) => {
  return async (input: string | URL, init?: RequestInit) => {
    const inputUrl = baseUrl ? new URL(input, baseUrl) : input;
    console.log(inputUrl, init);
    const response = await fetch(inputUrl, {
      ...init,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });

    if (response.status === 401) {
      cookies().delete("_at");
      redirect("/login");
    }

    return Promise.resolve(response);
  };
};

export default getFetch;

export const apiFetch = getFetch(process.env.BASE_API_URL);
