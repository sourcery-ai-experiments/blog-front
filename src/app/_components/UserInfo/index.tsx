"use server";

import apiAxios from "@/lib/apiAxios";
import Link from "next/link";
import LogoutLink from "../LogoutLink";
import { getToken } from "@/lib/token";

const UserInfo = async () => {
  const token = getToken();

  if (!token) {
    return (
      <div>
        <Link href="/login">로그인</Link>
      </div>
    );
  }

  // const {
  //   data: { data },
  // } = await apiAxios.get("/users/me");

  return (
    <div>
      {/* {data?.email} */}
      <LogoutLink />
    </div>
  );
};

export default UserInfo;
