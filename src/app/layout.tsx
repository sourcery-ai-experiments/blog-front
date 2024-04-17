import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "../providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "블로그",
  description: "블로그",
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
          <div className="max-w-screen-sm mx-auto py-20 px-4">{children}</div>
        </body>
      </html>
    </Providers>
  );
};

export default RootLayout;
