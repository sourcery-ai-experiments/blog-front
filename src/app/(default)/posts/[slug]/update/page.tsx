"use server";

import { useFormState } from "react-dom";
// import { savePostAction } from "./actions";
import { cache } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import MarkdownEditor from "@/components/posts/MarkdownEditor";
import { getDetail } from "@/lib/post";

function UpdatePostForm({
  post,
  action,
}: {
  post: Post | null;
  action?: string | ((formData: FormData) => void);
}) {
  "use client";
  return (
    <form data-color-mode="light" action={action}>
      <label htmlFor="id_title">Title</label>
      <Input
        id="id_title"
        className="mb-6"
        type="text"
        name="title"
        placeholder="Title"
        value={post?.title}
      />
      <label htmlFor="id_description">Description</label>
      <Input
        id="id_description"
        className="mb-6"
        type="text"
        name="description"
        placeholder="Description"
        value={post?.description ?? ""}
      />
      <MarkdownEditor name="content" initialValue={post?.content} />
      <Button className="mt-6" type="submit">
        등록
      </Button>
    </form>
  );
}

const getPostDetail = cache(async (slug: string) => {
  return getDetail(slug);
});

const UpdatePostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostDetail(params.slug);

  return <UpdatePostForm post={post} />;
};

export default UpdatePostPage;
