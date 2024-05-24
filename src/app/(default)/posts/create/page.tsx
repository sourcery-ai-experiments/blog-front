"use client";

import { useFormState } from "react-dom";
import { savePostAction } from "./actions";
import Button from "@/components/Button";
import Input from "@/components/Input";
import MarkdownEditor from "@/components/posts/MarkdownEditor";

const CreatePostPage = () => {
  const [, savePost] = useFormState(savePostAction, null);

  return (
    <form data-color-mode="light" action={savePost}>
      <label htmlFor="id_title">Title</label>
      <Input
        id="id_title"
        className="mb-6"
        type="text"
        name="title"
        placeholder="Title"
      />
      <label htmlFor="id_description">Description</label>
      <Input
        id="id_description"
        className="mb-6"
        type="text"
        name="description"
        placeholder="Description"
      />
      <MarkdownEditor name="content" />
      <Button className="mt-6" type="submit">
        등록
      </Button>
    </form>
  );
};

export default CreatePostPage;
