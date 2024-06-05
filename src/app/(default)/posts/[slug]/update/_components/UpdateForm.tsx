"use client";

import { useFormState } from "react-dom";
import { updatePostAction } from "../actions";
import Button from "@/components/Button";
import Input from "@/components/Input";
import MarkdownEditor from "@/components/posts/MarkdownEditor";

export function UpdatePostForm({ post }: { post: Post | null }) {
  const [_, action] = useFormState(updatePostAction, null);

  return (
    <form data-color-mode="light" action={action}>
      <Input name="id" type="hidden" value={post?.id} />
      <label htmlFor="id_title">Title</label>
      <Input
        className="mb-6"
        type="text"
        name="title"
        placeholder="Title"
        defaultValue={post?.title}
      />
      <label htmlFor="id_description">Description</label>
      <Input
        className="mb-6"
        type="text"
        name="description"
        placeholder="Description"
        defaultValue={post?.description ?? ""}
      />
      <MarkdownEditor
        name="content"
        initialValue={post?.content}
        height={500}
      />
      <Button className="mt-6" type="submit">
        등록
      </Button>
    </form>
  );
}
