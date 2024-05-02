import Link from "next/link";
import LoginForm from "./_components/LoginForm";
import { Suspense } from "react";
import { Footer } from "../(footer)/layout";

const LoginPage = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 bg-black/5 blur"></div>
      <div className="mx-auto flex w-full max-w-96 flex-col">
        <div className="relative rounded-md bg-white p-6 shadow">
          <div className="flex flex-col items-center justify-center">
            <div className="flex h-3 w-full justify-end">
              <Link href="/">
                <svg
                  width="12px"
                  height="12px"
                  viewBox="4 4 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000000"
                >
                  <path
                    d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="mb-6 mt-3 text-2xl font-bold">로그인</div>
          </div>
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LoginPage;
