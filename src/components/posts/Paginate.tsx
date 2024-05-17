"use client";

import { useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

const Paginate = ({
  pageCount,
  onClick,
}: {
  pageCount: number;
  onClick?: (props: {
    index: number | null;
    selected: number;
    nextSelectedPage: number | undefined;
    event: object;
    isPrevious: boolean;
    isNext: boolean;
    isBreak: boolean;
    isActive: boolean;
  }) => boolean | number | void;
}) => {
  const searchParams = useSearchParams();

  return (
    <ReactPaginate
      className="flex items-center justify-start gap-4"
      pageCount={pageCount}
      forcePage={parseInt(searchParams?.get("page") || "1") - 1}
      onClick={onClick}
    />
  );
};

export default Paginate;
