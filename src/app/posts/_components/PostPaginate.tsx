"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Paginate from "./Paginate";

const PostPaginate = ({ pageCount }: { pageCount: number }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <div className="mt-8">
      <Paginate
        pageCount={pageCount}
        onClick={({ nextSelectedPage }) => {
          if (nextSelectedPage === undefined) return;
          const params = new URLSearchParams(searchParams);
          router.push(`/posts?${params.toString()}`);
        }}
      />
    </div>
  );
};

export default PostPaginate;
