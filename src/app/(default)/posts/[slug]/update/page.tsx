"use server";

import { notFound } from "next/navigation";
import { cache } from "react";
import { UpdatePostForm } from "./_components/UpdateForm";
import { getSession } from "@/lib/session";
import { getDetail } from "@/lib/post";

const getPostDetail = cache(async (slug: string) => {
  return getDetail(slug);
});

const UpdatePostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostDetail(params.slug);

  if (!post) {
    return notFound();
  }

  const session = await getSession();

  if (post.userId !== session.id) {
    return notFound();
  }

  return <UpdatePostForm post={post} />;
};

export default UpdatePostPage;
