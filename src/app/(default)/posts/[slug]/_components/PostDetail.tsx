import dayjs from "dayjs";
import Link from "next/link";
import MarkdownContent from "@/components/posts/MarkdownContent";

export default function PostDetail({ post }: { post: Post }) {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-gray-950 dark:text-gray-50">
        {post.title}
      </h1>
      <div className="mb-16 flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <div>{dayjs(post.createdAt).format("YYYY-MM-DD")}</div>
        <div>
          <Link href={`/posts/${post.slug}/update`}>수정</Link>
        </div>
      </div>
      <div>
        <MarkdownContent content={post.content} />
      </div>
    </div>
  );
}
