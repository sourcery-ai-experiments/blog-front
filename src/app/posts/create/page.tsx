"use client";

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { useFormState } from "react-dom";
import { savePostAction } from "./actions";
import Input from "@/app/_components/Input";
import Button from "@/app/_components/Button";

const CreatePostPage = () => {
  const [mdValue, setMdValue] = useState<string | undefined>();
  const [, savePost, isPending] = useFormState(savePostAction, null);

  return (
    <form data-color-mode="light" action={savePost}>
      <Input type="text" name="title" placeholder="Title" />
      <textarea name="content" value={mdValue} />
      <MDEditor value={mdValue} onChange={setMdValue} />
      {/* <MDEditor.Markdown source={mdValue} /> */}
      <Button type="submit">등록</Button>
    </form>
  );
};

export default CreatePostPage;
