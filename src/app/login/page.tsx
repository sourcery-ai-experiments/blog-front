"use server";

import Link from "next/link";
import LoginForm from "./_components/LoginForm";
import { Suspense } from "react";

const LoginPage = async () => {
  return (
    <>
      <div className="absolute inset-0 bg-black/5 blur -z-10"></div>
      <div className="relative max-w-96 mx-auto w-full p-6 rounded-md bg-white shadow">
        <div className="flex flex-col justify-center items-center">
          <div className="w-full flex justify-end h-3">
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
          <div className="text-2xl font-bold mb-6 mt-3">로그인</div>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </>
  );
};

export default LoginPage;
