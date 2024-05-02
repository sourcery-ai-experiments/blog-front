"use server";

import db from "@/lib/db";
import { getSession } from "@/lib/session";
import {
  EMAIL_ERROR,
  EMAIL_REQUIRED_ERROR,
  EMAIL_TYPE_ERROR,
  PASSWORD_REQUIRED_ERROR,
  PASSWORD_TYPE_ERROR,
} from "@/lib/validation";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { z } from "zod";

const loginSchema = z
  .object({
    email: z
      .string({
        invalid_type_error: EMAIL_TYPE_ERROR,
        required_error: EMAIL_REQUIRED_ERROR,
      })
      .email({ message: EMAIL_ERROR }),
    password: z.string({
      invalid_type_error: PASSWORD_TYPE_ERROR,
      required_error: PASSWORD_REQUIRED_ERROR,
    }),
  })
  .superRefine(async ({ email, password }, ctx) => {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!user || !user.password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "사용자 인증 오류",
        fatal: true,
      });

      return z.NEVER;
    }

    if (!(await bcrypt.compare(password, user.password))) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "사용자 인증 오류",
        fatal: true,
      });

      return z.NEVER;
    }

    const session = await getSession();

    session.id = user.id;
    session.name = user.name ?? "";
    session.email = user.email ?? "";

    await session.save();
  });

export const loginAction = async (_: any, formData: FormData) => {
  const parsed = await loginSchema.safeParseAsync(
    Object.fromEntries(formData.entries())
  );

  if (!parsed.success) {
    return parsed.error.flatten();
  }

  redirect("/");
};
