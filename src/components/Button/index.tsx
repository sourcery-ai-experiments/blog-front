"use client";

import type { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

const Button = ({
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { pending } = useFormStatus();

  return (
    <button
      className={`w-full rounded border-r bg-blue-800 px-4 py-3.5 text-sm font-bold leading-5 text-white disabled:bg-gray-400 ${className}`}
      disabled={pending}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
