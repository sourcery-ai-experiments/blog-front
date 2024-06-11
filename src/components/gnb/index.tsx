"use server";

import Link from "next/link";
import { getSession, logout } from "@/lib/session";

export default async function Gnb() {
  const { id, email } = await getSession();

  return (
    <nav className="flex justify-between p-6">
      <Link href={"/"}>Home</Link>

      {id ? (
        <div className="flex gap-4">
          <Link href={"/posts/create"}>New Post</Link>
          <div>{email}</div>
          <form action={logout}>
            <button type="submit">Logout</button>
          </form>
        </div>
      ) : (
        <div>
          <Link href={"/login"}>Log in</Link>
        </div>
      )}
    </nav>
  );
}
