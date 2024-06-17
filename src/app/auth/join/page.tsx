"use client";

import { useFormState } from "react-dom";
import { join } from "./actions";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { H1 } from "@/components/ui/typography";

export default function JoinPage() {
  const [state, action] = useFormState(join, null);

  return (
    <div className="flex h-dvh w-screen items-center justify-center p-4">
      <div className="h-fit w-96">
        <H1 className="mb-12">Join</H1>
        <form className="flex flex-col gap-4" action={action}>
          <Input
            id="join_email"
            label="Email"
            type="email"
            name="email"
            errors={state?.errors && state.errors.fieldErrors.email}
          />
          <Input
            id="join_password"
            label="Password"
            type="password"
            name="password"
            errors={state?.errors && state.errors.fieldErrors.password}
          />
          <Input
            id="join_password_confirm"
            label="Confirm Password"
            type="password"
            name="passwordConfirm"
            errors={state?.errors && state.errors.fieldErrors.passwordConfirm}
          />
          <Button type="submit">가입</Button>
        </form>
      </div>
    </div>
  );
}
