"use server";

import Link from "next/link";
import UserInfo from "@/components/UserInfo";
import { getSession } from "@/lib/session";

const Home = async () => {
  const session = await getSession();

  return (
    <main>
      <h1>블로그</h1>
      <Link href="/posts/create">post</Link>
      <UserInfo user={session.id ? session : undefined} />
    </main>
  );
};

export default Home;
