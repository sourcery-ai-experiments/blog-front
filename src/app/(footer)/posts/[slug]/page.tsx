"use server";

import dayjs from "dayjs";
import { notFound } from "next/navigation";
import { cache } from "react";
import MarkdownContent from "../_components/MarkdownContent";
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
    description: `Posted on ${dayjs(post.createdAt).format("YYYY-MM-DD")}`,
  };
};

const PostDetail = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostDetail(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div>
        <h1 className="mb-9 text-3xl font-bold text-gray-950 dark:text-gray-50">
          {post.title}
        </h1>
        <div className="mb-8 flex justify-end text-sm text-gray-500 dark:text-gray-400">
          {dayjs(post.createdAt).format("YYYY-MM-DD")}
        </div>
        <div>
          <MarkdownContent content={post.content} />
        </div>
      </div>
    </>
  );
};

export default PostDetail;
