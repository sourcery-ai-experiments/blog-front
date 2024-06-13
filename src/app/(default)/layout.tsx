import { Suspense } from "react";
import Gnb from "@/components/gnb";
import CommonLoading from "@/components/loading/Loading";

export const Footer = () => {
  return (
    <div className="mt-20 text-sm text-gray-500 dark:text-gray-400">
      © <time>2024.</time> freejak5520. All rights reserved.
    </div>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Gnb />
      <div className="mx-auto max-w-screen-md px-4 py-20">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
