"use server";

import { apiFetch } from "@/lib/getFetch";

export const savePostAction = async (_: any, formData: FormData) => {
  const response = await apiFetch("/api/posts", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData.entries())),
  });
  const { data } = await response.json();

  console.log(data);

  return data;
};
