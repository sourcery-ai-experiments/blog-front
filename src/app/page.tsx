"use server";

import Link from "next/link";
import UserInfo from "../components/UserInfo";
import About from "./about/page";

const Home = async () => {
  return (
    <main>
      <h1>블로그</h1>

      <About />
      <Link href="/posts/create">post</Link>
      <UserInfo />
    </main>
  );
};

export default Home;
