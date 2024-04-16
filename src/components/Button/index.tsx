"use client";

import { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

const Button = ({
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { pending } = useFormStatus();

  return (
    <button
      className={`border-r bg-blue-800 text-white font-bold px-4 py-3.5 leading-5 text-sm rounded w-full disabled:bg-gray-400 ${className}`}
      disabled={pending}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
