"use server";

import Link from "next/link";
import getUser from "@/lib/getUser";
import About from "./about/page";
import UserInfo from "@/components/UserInfo";

const Home = async () => {
  const user = await getUser();

  return (
    <main>
      <h1>블로그</h1>

      <About />
      <Link href="/posts/create">post</Link>
      <UserInfo user={user} />
    </main>
  );
};

export default Home;
