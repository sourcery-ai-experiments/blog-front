"use client";

import type { InputHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

const Input = ({
  errors,
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement> & {
  errors?: string[];
  className?: string;
}) => {
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col gap-2">
      <input
        className={
          "w-full rounded border-none px-4 py-3.5 text-sm leading-5 ring-1 ring-inset " +
          className
        }
        disabled={pending}
        {...rest}
      />
      {errors &&
        errors.map((error, index) => (
          <span key={index} className="text-sm text-red-500">
            {error}
          </span>
        ))}
    </div>
  );
};

export default Input;
