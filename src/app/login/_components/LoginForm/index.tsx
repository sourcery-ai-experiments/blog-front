"use client";

import { useFormState } from "react-dom";
import { loginAction } from "../../actions";
import Button from "@/components/Button";
import Input from "@/components/Input";

const LoginForm = () => {
  // const searchParams = useSearchParams();
  // const redirectTo = searchParams.get("next");
  const [state, login] = useFormState(loginAction, null);

  return (
    <form action={login} className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        {/* {redirectTo && <input type="hidden" name="next" value={redirectTo} />} */}
        <Input
          type="text"
          name="email"
          placeholder="이메일"
          autoComplete="username"
          errors={state?.fieldErrors.email}
        />
        <Input
          type="password"
          name="password"
          placeholder="비밀번호"
          autoComplete="current-password"
          errors={state?.fieldErrors.password}
        />
      </div>
      <Button type="submit">로그인</Button>
    </form>
  );
};

export default LoginForm;
