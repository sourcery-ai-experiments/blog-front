"use server";

import { deleteToken } from "@/lib/token";
import { NextResponse } from "next/server";

export const POST = () => {
  deleteToken();

  return NextResponse.json({ message: "Logout successful" });
};
