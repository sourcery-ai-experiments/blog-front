"use client";

import Button from "@/app/_components/Button";
import Input from "@/app/_components/Input";
import MDEditor, {
  ICommand,
  TextAreaTextApi,
  TextState,
} from "@uiw/react-md-editor";
import axios from "axios";
import { useState } from "react";
import { useFormState } from "react-dom";
import { savePostAction } from "./actions";
import useUser from "@/hooks/useUser";

const CreatePostPage = () => {
  const { user } = useUser();

  console.log(user);

  const [mdValue, setMdValue] = useState<string | undefined>();
  const [, savePost] = useFormState(savePostAction, null);

  const UploadImage: ICommand = {
    name: "Upload Image",
    keyCommand: "uploadImage",
    buttonProps: { "aria-label": "Upload Image" },
    icon: (
      <svg width="12" height="12" viewBox="0 0 20 20">
        <path
          fill="currentColor"
          d="M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z"
        ></path>
      </svg>
    ),
    execute: (state: TextState, api: TextAreaTextApi) => {
      console.log("hello");

      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = async (e: any) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // const url = URL.createObjectURL(file);

        const {
          data: { path },
        } = await axios.post(
          "/api/images",
          {
            image: file,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        api.replaceSelection(`![](${path})`);
      };
      input.click();
    },
  };

  return (
    <form data-color-mode="light" action={savePost}>
      <Input type="text" name="title" placeholder="Title" />
      <textarea name="content" value={mdValue} className="hidden" />
      <MDEditor
        value={mdValue}
        onChange={setMdValue}
        commands={[UploadImage]}
        // extraCommands={[commands.divider, UploadImage]}
      />
      {/* <MDEditor.Markdown source={mdValue} / > */}
      <Button type="submit">등록</Button>
    </form>
  );
};

export default CreatePostPage;
