"use server";

import apiAxios from "@/lib/apiAxios";
import PostItem from "./_components/PostItem";
import Paginate from "./_components/Paginate";

const Posts = async ({
  searchParams: { page },
}: {
  searchParams: { page: string };
}) => {
  const {
    data: { data, meta },
  } = await apiAxios.get("/posts", {
    params: {
      page,
    },
  });

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
