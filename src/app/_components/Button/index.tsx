"use client";

import { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

const Button = ({
  type,
  children,
}: {
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  children?: React.ReactNode;
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      type={type}
      className="border-r bg-blue-800 text-white font-bold px-4 py-3.5 leading-5 text-sm rounded w-full disabled:bg-gray-400"
      disabled={pending}
    >
      {children}
    </button>
  );
};

export default Button;
