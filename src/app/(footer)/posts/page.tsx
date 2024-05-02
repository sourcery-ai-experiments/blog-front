"use server";

import db from "@/lib/db";
import { getSession } from "@/lib/session";
import dayjs from "dayjs";
import Item from "./_components/Item";

export const generateMetadata = async () => {
  const session = await getSession();

  return {
    title: `${session.name} Posts.`,
  };
};

export default async function Posts({
  searchParams,
}: {
  searchParams: { page: string };
}) {
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
      <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">
        Posts
      </h1>
      {posts.map((post) => (
        <Item
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
