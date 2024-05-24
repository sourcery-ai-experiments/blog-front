"use server";

import dayjs from "dayjs";
import { notFound } from "next/navigation";
import { cache } from "react";
import PostDetail from "./_components/PostDetail";
import db from "@/lib/db";

const getPostDetail = cache(async (slug: string) => {
  return db.post.findUnique({
    where: { slug },
  });
});

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const post = await getPostDetail(params.slug);

  if (!post) return;

  return {
    title: post.title,
    description:
      post.description ||
      `Posted on ${dayjs(post.createdAt).format("YYYY-MM-DD")}`,
  };
};

export default async function PostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostDetail(params.slug);

  if (!post) {
    notFound();
  }

  return <PostDetail post={post} />;
}
