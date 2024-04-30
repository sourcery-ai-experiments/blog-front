"use server";

import { apiFetch } from "@/lib/getFetch";
import MarkdownContent from "../_components/MarkdownContent";
import dayjs from "dayjs";

const getPost = async (slug: string) => {
  const response = await apiFetch(`/api/posts/${slug}`);
  const { data } = await response.json();
  return data;
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const post = await getPost(params.slug);

  if (!post) return;

  return {
    title: post.title,
    description: `Posted on ${dayjs(post.created_at).format("YYYY-MM-DD")}`,
  };
};

const PostDetail = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mb-9 text-gray-950 dark:text-gray-50">
          {post.title}
        </h1>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400 flex justify-end">
          {dayjs(post.created_at).format("YYYY-MM-DD")}
        </div>
        <div>
          <MarkdownContent content={post.content} />
        </div>
      </div>
    </>
  );
};

export default PostDetail;
