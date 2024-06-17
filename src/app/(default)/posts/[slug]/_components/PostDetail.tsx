import dayjs from "dayjs";
import Link from "next/link";
import { Suspense } from "react";
import MarkdownContent from "@/components/posts/MarkdownContent";
import CommonLoading from "@/components/loading/Loading";

export default function PostDetail({ post }: { post?: Post }) {
  return (
    <div>
      <Suspense>
        <h1 className="mb-8 text-3xl font-bold text-gray-950 dark:text-gray-50">
          {post && post.title}
        </h1>
        {post && (
          <div className="mb-16 flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <div>{dayjs(post.createdAt).format("YYYY-MM-DD")}</div>
            <div>
              <Link href={`/posts/${post.slug}/update`}>수정</Link>
            </div>
          </div>
        )}
        <div>
          {post && typeof post.content === "string" ? (
            <MarkdownContent content={post.content} />
          ) : (
            <CommonLoading />
          )}
        </div>
      </Suspense>
    </div>
  );
}
