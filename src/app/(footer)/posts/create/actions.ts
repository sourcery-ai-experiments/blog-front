"use server";

import db from "@/lib/db";
import { makePostSlug } from "@/lib/post";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { z } from "zod";

const postSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export const savePostAction = async (_: any, formData: FormData) => {
  const session = await getSession();

  if (!session.id) {
    redirect("/login");
  }

  const result = await postSchema.safeParseAsync(
    Object.fromEntries(formData.entries())
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
    },
  });

  redirect(`/posts/${post.slug}`);
};
