"use server";

import Link from "next/link";
import UserInfo from "../components/UserInfo";
import About from "./about/page";
import getUser from "@/lib/getUser";

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
