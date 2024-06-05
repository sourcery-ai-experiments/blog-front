"use client";

import MDEditor, {
  TextAreaTextApi,
  type ICommand,
  type TextState,
} from "@uiw/react-md-editor";
import { useState } from "react";

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
  execute: (_: TextState, api: TextAreaTextApi) => {
    console.log("hello");

    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async (e: any) => {
      const file = e.target.files?.[0];
      if (!file) return;

      // const url = URL.createObjectURL(file);

      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch("/api/images", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });

      const { path } = await response.json();

      // const {
      //   data: { path },
      // } = await axios.post(
      //   "/api/images",
      //   {
      //     image: file,
      //   },
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );

      api.replaceSelection(`![](${path})`);
    };
    input.click();
  },
};

const MarkdownEditor = ({
  name,
  initialValue,
  height,
}: {
  name: string;
  initialValue?: string;
  height?: string | number;
}) => {
  const [mdValue, setMdValue] = useState<string | undefined>(initialValue);

  return (
    <>
      <textarea name={name} className="hidden" value={mdValue} readOnly />
      <MDEditor
        value={mdValue}
        onChange={setMdValue}
        // commands={[UploadImage]}
        // extraCommands={[commands.divider, UploadImage]}
        height={height}
      />
      {/* <MDEditor.Markdown source={mdValue} / > */}
    </>
  );
};

export default MarkdownEditor;
