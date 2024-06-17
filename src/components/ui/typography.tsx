import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const H1 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
};

export const H3 = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
};

export const H4 = ({ children }: { children: ReactNode }) => {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
};

export const P = ({ children }: { children: ReactNode }) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};
