import Link from "next/link";
import { getSession } from "@/lib/session";

export default async function Gnb() {
  const { id, email } = await getSession();
  return (
    <div className="flex justify-between p-6">
      <Link href={"/"}>Home</Link>

      {id ? (
        <div className="flex gap-4">
          <div>{email}</div>
          <Link href={"/logout"}>Logout</Link>
        </div>
      ) : (
        <div>
          <Link href={"/login"}>Log in</Link>
        </div>
      )}
    </div>
  );
}
