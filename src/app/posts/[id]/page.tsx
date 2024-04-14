"use server";

import { apiFetch } from "@/lib/getFetch";
import MarkdownContent from "../_components/MarkdownContent";

const PostDetail = async ({ params }: { params: { id: string } }) => {
  const response = await apiFetch(`/api/posts/${params.id}`);
  const { data } = await response.json();

  return (
    <div>
      <div className="text-3xl font-bold">{data.title}</div>
      <div>
        <MarkdownContent content={data.content} />
      </div>
      <div>{new Date(data.created_at).toLocaleString()}</div>
      <div>{new Date(data.updated_at).toLocaleString()}</div>
    </div>
  );
};

export default PostDetail;
