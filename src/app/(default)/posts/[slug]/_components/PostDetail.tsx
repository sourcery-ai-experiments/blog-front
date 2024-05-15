import dayjs from "dayjs";
import MarkdownContent from "@/app/(default)/posts/_components/MarkdownContent";

export default function PostDetail({ post }: { post: Post }) {
  return (
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
  );
}
