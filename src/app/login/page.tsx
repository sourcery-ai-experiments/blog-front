"use client";

import { useFormState } from "react-dom";
import LoginForm from "@/app/login/_components/LoginForm";
import { loginAction } from "@/app/login/actions";

const LoginPage = () => {
  const [state, login] = useFormState(loginAction, null);

  return <LoginForm fieldErrors={state?.fieldErrors} action={login} />;
};

export default LoginPage;
