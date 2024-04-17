"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useFormState } from "react-dom";
import MarkdownEditor from "../_components/MarkdownEditor";
import { savePostAction } from "./actions";

const CreatePostPage = () => {
  const [, savePost] = useFormState(savePostAction, null);

  return (
    <form data-color-mode="light" action={savePost}>
      <Input className="mb-6" type="text" name="title" placeholder="Title" />
      <MarkdownEditor name="content" />
      <Button className="mt-6" type="submit">
        등록
      </Button>
    </form>
  );
};

export default CreatePostPage;
