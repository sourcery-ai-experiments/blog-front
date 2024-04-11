"use server";

import getApiAxios from "@/lib/getApiAxios";
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutLink from "../LogoutLink";

const UserInfo = async () => {
  const token = cookies().get(process.env.TOKEN_COOKIE_NAME);
  const apiAxios = await getApiAxios();

  if (!token) {
    return (
      <div>
        <Link href="/login">로그인</Link>
      </div>
    );
  }

  const {
    data: { data },
  } = await apiAxios.get("/users/me");

  return (
    <div>
      {data?.email}
      <LogoutLink />
    </div>
  );
};

export default UserInfo;
