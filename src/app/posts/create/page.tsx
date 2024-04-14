"use client";

import Button from "@/app/_components/Button";
import Input from "@/app/_components/Input";
import { useFormState } from "react-dom";
import MarkdownEditor from "../_components/MarkdownEditor";
import { savePostAction } from "./actions";

const CreatePostPage = () => {
  const [, savePost] = useFormState(savePostAction, null);

  return (
    <form data-color-mode="light" action={savePost}>
      <Input type="text" name="title" placeholder="Title" />
      <MarkdownEditor name="content" />
      <Button type="submit">등록</Button>
    </form>
  );
};

export default CreatePostPage;
