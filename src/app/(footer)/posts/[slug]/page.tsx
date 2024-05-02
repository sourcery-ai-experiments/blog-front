"use server";

import db from "@/lib/db";
import dayjs from "dayjs";
import { notFound } from "next/navigation";
import { cache } from "react";
import MarkdownContent from "../_components/MarkdownContent";

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
        <h1 className="text-3xl font-bold mb-9 text-gray-950 dark:text-gray-50">
          {post.title}
        </h1>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400 flex justify-end">
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
