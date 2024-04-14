"use server";

import apiAxios from "@/lib/apiAxios";

export const savePostAction = async (_: any, formData: FormData) => {
  console.log(formData);

  const { data } = await apiAxios.post("/posts", {
    title: formData.get("title"),
    content: formData.get("content"),
  });

  console.log(data);

  return data;
};
