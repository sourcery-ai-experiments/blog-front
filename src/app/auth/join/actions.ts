"use server";

import { hash } from "bcrypt";
import { z } from "zod";
import { redirect } from "next/navigation";
import db from "@/lib/db";
import { getSession } from "@/lib/session";

const joinSchema = z
  .object({
    email: z
      .string()
      .email()
      .refine(
        async (email) => {
          const user = await db.user.findUnique({
            select: {
              email: true,
            },
            where: {
              email: email,
            },
          });

          return !user;
        },
        {
          message: "Email already exists",
        },
      ),
    password: z.string().min(8),
    passwordConfirm: z.string().min(8),
  })
  .superRefine(async ({ password, passwordConfirm }, ctx) => {
    if (password !== passwordConfirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
      });
      return z.NEVER;
    }
  });

export async function join(
  _: { errors?: any; result?: User } | null,
  formData: FormData,
) {
  const data = Object.fromEntries(formData);

  const result = await joinSchema.safeParseAsync(data);

  if (!result.success) {
    return { errors: result.error.flatten() };
  }

  const { email, password } = result.data;

  const user = await db.user.create({
    data: {
      email: email,
      password: await hash(password, 10),
    },
  });

  const session = await getSession();
  session.email = user.email;
  session.id = user.id;
  session.save();

  return redirect("/");
}
