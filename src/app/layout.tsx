import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "../providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "블로그",
  description: "블로그",
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="max-w-screen-sm mx-auto py-20 px-4">
        {children}
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-20">
          © <time>2024.</time> freejak55520. All rights reserved.
        </div>
      </div>
    </>
  );
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Providers>
      <html lang="ko">
        <body className={inter.className}>
          <Layout>{children}</Layout>
        </body>
      </html>
    </Providers>
  );
};

export default RootLayout;
