"use client";

import { useFormState } from "react-dom";
import { savePostAction } from "./actions";
import CreateForm from "@/app/(footer)/posts/create/_components/CreateForm";

const CreatePostPage = () => {
  const [, savePost] = useFormState(savePostAction, null);

  return <CreateForm action={savePost} />;
};

export default CreatePostPage;
