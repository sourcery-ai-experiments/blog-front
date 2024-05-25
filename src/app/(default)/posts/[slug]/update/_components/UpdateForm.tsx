"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import MarkdownEditor from "@/components/posts/MarkdownEditor";

export function UpdatePostForm({
  post,
  action,
}: {
  post: Post | null;
  action?: string | ((formData: FormData) => void);
}) {
  return (
    <form data-color-mode="light" action={action}>
      <label htmlFor="id_title">Title</label>
      <Input
        id="id_title"
        className="mb-6"
        type="text"
        name="title"
        placeholder="Title"
        defaultValue={post?.title}
      />
      <label htmlFor="id_description">Description</label>
      <Input
        id="id_description"
        className="mb-6"
        type="text"
        name="description"
        placeholder="Description"
        defaultValue={post?.description ?? ""}
      />
      <MarkdownEditor name="content" initialValue={post?.content} />
      <Button className="mt-6" type="submit">
        등록
      </Button>
    </form>
  );
}
