"use server";

import dayjs from "dayjs";
import { cache } from "react";
import PostItem from "./_components/PostItem";
import { getSession } from "@/lib/session";
import db from "@/lib/db";
import { H1 } from "@/components/ui/typography";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";

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
