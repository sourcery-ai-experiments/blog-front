"use client";

import { useFormStatus } from "react-dom";

const Input = ({
  type,
  placeholder,
  value,
  name,
  id,
  className,
  required,
  autoComplete,
  errors,
}: {
  type?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  id?: string;
  className?: string;
  required?: boolean;
  autoComplete?: string;
  errors?: string[];
}) => {
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col gap-2">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        id={id}
        required={required}
        autoComplete={autoComplete}
        className={
          "w-full px-4 py-3.5 text-sm leading-5 border-none ring-1 ring-inset rounded " +
          className
        }
        disabled={pending}
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
