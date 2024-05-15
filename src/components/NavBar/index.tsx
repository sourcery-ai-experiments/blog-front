import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-end gap-3">
      <Link className="font-semibold" href={"/posts"}>
        Blog
      </Link>
      <Link className="font-semibold" href={"/about"}>
        About
      </Link>
      <Link
        className="font-semibold"
        href={"https://github.com/freejak5520"}
        target="_blank"
      >
        GitHub
      </Link>
    </div>
  );
};

export default NavBar;
