import { notFound, redirect } from "next/navigation";
import { z } from "zod";
import { isUserAuthorOfPost, updatePost } from "@/lib/post";
import { getSession } from "@/lib/session";

const updatePostSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  description: z.string().default(""),
});

export async function updatePostAction(_: any, formData: FormData) {
  const parsed = updatePostSchema.safeParse(Object.fromEntries(formData));

  const session = await getSession();

  if (!session) {
    return redirect("/login");
  }

  if (!parsed.success) {
    return parsed.error.flatten();
  }

  if (!isUserAuthorOfPost(parseInt(parsed.data.id), session.id)) {
    return notFound();
  }

  const { id, ...post } = parsed.data;

  const result = await updatePost(parseInt(id), post);

  redirect(`/posts/${result.slug}`);
}
