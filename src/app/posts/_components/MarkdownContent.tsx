"use client";

import MDEditor from "@uiw/react-md-editor";

const MarkdownContent = ({ content }: { content: string }) => {
  return (
    <div data-color-mode="light">
      <MDEditor.Markdown source={content} />
    </div>
  );
};
export default MarkdownContent;
