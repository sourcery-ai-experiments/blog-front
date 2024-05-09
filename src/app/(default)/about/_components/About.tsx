import Header from "@/components/Header";
import { P } from "@/components/ui/typography";

const About = () => {
  return (
    <div>
      <Header title="About" />

      <P>
        python, django로 개발을 시작해서 PHP, Laravel 백엔드 개발을 거쳐
        <br />
        React, Next.js 프론트엔드로 개발을 하고있는 프론트엔드 개발자입니다.
      </P>
    </div>
  );
};

export default About;
