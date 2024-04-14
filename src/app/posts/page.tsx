"use server";

import { apiFetch } from "@/lib/getFetch";
import Paginate from "./_components/Paginate";
import PostItem from "./_components/PostItem";

const Posts = async ({ searchParams }: { searchParams: { page: string } }) => {
  const params = new URLSearchParams(searchParams);
  const response = await apiFetch(`/api/posts?${params.toString()}`);
  const { data, meta } = await response.json();

  return (
    <div>
      {data.map((post: Post) => (
        <PostItem key={post.id} post={post} />
      ))}
      <Paginate meta={meta} url="/posts" />
    </div>
  );
};

export default Posts;
