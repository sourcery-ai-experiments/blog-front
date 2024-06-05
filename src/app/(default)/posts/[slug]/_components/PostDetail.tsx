import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import type { ClassAttributes, ImgHTMLAttributes } from "react";
import Markdown, { type ExtraProps } from "react-markdown";
import { height } from "tailwindcss/defaultTheme";

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
        <Markdown
          components={{
            h1: (props) => {
              return (
                <h1 className="mb-4 border-b text-3xl font-bold" {...props} />
              );
            },
            h2: (props) => {
              return (
                <h2
                  className="my-8 border-b pb-2 text-2xl font-bold"
                  {...props}
                />
              );
            },
            h3: (props) => {
              return <h3 className="my-8 text-xl font-bold" {...props} />;
            },
            img: (props) => {
              // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
              return <img className="mx-auto my-12" {...props} />;
            },
            p: (props) => {
              return <p className="my-6" {...props} />;
            },
            a: (props) => {
              return <a className="text-blue-500 hover:underline" {...props} />;
            },
          }}
        >
          {post.content}
        </Markdown>
        {/* <MarkdownContent content={post.content} /> */}
      </div>
    </div>
  );
}
