"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import db from "@/lib/db";
import { makePostSlug } from "@/lib/post";
import { getSession } from "@/lib/session";

const postSchema = z.object({
  title: z.string(),
  content: z.string(),
  description: z.string().optional(),
});

export const savePostAction = async (_: any, formData: FormData) => {
  const session = await getSession();

  if (!session.id) {
    redirect("/login");
  }

  const result = await postSchema.safeParseAsync(
    Object.fromEntries(formData.entries()),
  );

  if (!result.success) {
    return result.error.flatten();
  }

  const post = await db.post.create({
    data: {
      userId: session.id,
      slug: await makePostSlug(result.data.title),
      title: result.data.title,
      content: result.data.content,
      description: result.data.description,
    },
  });

  redirect(`/posts/${post.slug}`);
};
