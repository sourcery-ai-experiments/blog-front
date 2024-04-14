"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

const Paginate = ({ meta, url }: { meta: any; url?: string }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <ReactPaginate
      pageCount={meta.last_page}
      forcePage={parseInt(searchParams.get("page") || "1") - 1}
      onClick={({ nextSelectedPage }) => {
        console.log("new page", nextSelectedPage);

        if (nextSelectedPage === undefined) return;

        const params = new URLSearchParams(searchParams);
        params.set("page", String(nextSelectedPage + 1));

        router.push(`${url}?${params.toString()}`);
      }}
    />
  );
};

export default Paginate;
