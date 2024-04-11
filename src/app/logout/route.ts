"use server";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = () => {
  cookies().delete(process.env.TOKEN_COOKIE_NAME);

  return NextResponse.json({ message: "Logout successful" });
};
