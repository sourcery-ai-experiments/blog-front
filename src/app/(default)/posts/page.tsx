"use server";

import dayjs from "dayjs";
import { cache } from "react";
import PostItem from "../../../components/posts/PostItem";
import Header from "@/components/Header";
import db from "@/lib/db";
import { getSession } from "@/lib/session";

export const generateMetadata = cache(async () => {
  return {
    title: `Posts.`,
  };
});

export default async function Posts() {
  const session = await getSession();

  const posts = await db.post.findMany({
    where: {
      userId: session.id,
    },
    orderBy: {
      id: "desc",
    },
  });

  return (
    <div>
      <Header title="Blog" />

      {posts.map((post) => (
        <PostItem
          key={post.slug}
          title={post.title}
          description={post.content}
          date={dayjs(post.createdAt).format("YYYY-MM-DD")}
          href={`/posts/${post.slug}`}
        />
      ))}
      {/* <PostPaginate pageCount={meta.last_page} /> */}
    </div>
  );
}
