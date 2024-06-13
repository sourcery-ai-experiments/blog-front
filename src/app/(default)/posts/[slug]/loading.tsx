import PostDetail from "./_components/PostDetail";
import CommonLoading from "@/components/loading/Loading";

export default function Loading() {
  return (
    <PostDetail post={{ title: "Loading...", content: <CommonLoading /> }} />
  );
}
