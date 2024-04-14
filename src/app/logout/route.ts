"use server";

import { deleteToken } from "@/lib/token";
import { NextRequest } from "next/server";

export const GET = (request: NextRequest) => {
  deleteToken();

  return Response.redirect(new URL("/login", request.url));
};
