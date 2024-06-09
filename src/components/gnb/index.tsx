"use server";

import Link from "next/link";
import { getSession, logout } from "@/lib/session";

export default async function Gnb() {
  const { id, email } = await getSession();

  return (
    <nav className="flex justify-between p-6">
      <Link href={"/"}>Home</Link>

      {id ? (
        <form className="flex gap-4" action={logout}>
          <div>{email}</div>
          <button type="submit">Logout</button>
        </form>
      ) : (
        <div>
          <Link href={"/login"}>Log in</Link>
        </div>
      )}
    </nav>
  );
}
