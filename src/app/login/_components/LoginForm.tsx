"use client";

import { useSearchParams } from "next/navigation";
import Button from "@/components/Button";
import Input from "@/components/Input";

const LoginForm = ({
  fieldErrors,
  action,
}: {
  fieldErrors?: {
    email?: string[] | undefined;
    password?: string[] | undefined;
  };
  action?: string | ((formData: FormData) => void);
}) => {
  const searchParams = useSearchParams();
  const next = searchParams.get("next");

  return (
    <form action={action} className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Input
          type="text"
          name="email"
          placeholder="이메일"
          autoComplete="username"
          errors={fieldErrors?.email}
        />
        <Input
          type="password"
          name="password"
          placeholder="비밀번호"
          autoComplete="current-password"
          errors={fieldErrors?.password}
        />
        {next && <input type="hidden" name="next" value={next} />}
      </div>
      <Button type="submit">로그인</Button>
    </form>
  );
};

export default LoginForm;
