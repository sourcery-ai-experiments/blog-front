import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { H1 } from "@/components/ui/typography";

const Home = () => {
  // const session = await getSession();

  return (
    <main>
      <Header title="Home" />
      {/* <Link href="/posts/create">post</Link> */}
      {/* <UserInfo user={session.id ? session : undefined} /> */}
    </main>
  );
};

export default Home;
