import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const MaxWidthDecorator = ({
  children,
  maxWidth = "max-w-screen-md",
}: {
  children: ReactNode;
  maxWidth?: string;
}) => {
  return <div className={cn("mx-auto", maxWidth)}>{children}</div>;
};

export default MaxWidthDecorator;
