"use server";

import Link from "next/link";
import About from "./about/page";
import UserInfo from "@/components/UserInfo";
import { getSession } from "@/lib/session";

const Home = async () => {
  const session = await getSession();

  return (
    <main>
      <h1>블로그</h1>

      <About />
      <Link href="/posts/create">post</Link>
      <UserInfo user={session.id ? session : undefined} />

      {/* { dayjs("2024-04-12T08:37:13.000000Z").format("YYYY-MM-DD")} */}
    </main>
  );
};

export default Home;
