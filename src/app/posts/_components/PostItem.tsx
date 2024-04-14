"use server";

import Link from "next/link";

const PostItem = async ({ post }: { post: Post }) => {
  return (
    <div>
      <Link href={`/posts/${post.id}`}>{post.title}</Link>
    </div>
  );
};

export default PostItem;
