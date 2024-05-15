import NavBar from "../NavBar";
import { Separator } from "../ui/separator";
import { H1 } from "../ui/typography";

const Header = ({ title }: { title: string }) => {
  return (
    <div>
      <H1>{title}</H1>
      <NavBar />
      <Separator className="my-10" />
    </div>
  );
};

export default Header;
