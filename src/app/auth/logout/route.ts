import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export async function GET() {
  const { destroy } = await getSession();

  destroy();

  redirect("/");
}
