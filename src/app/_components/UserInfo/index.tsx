"use server";

import Link from "next/link";
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
      <Link href="/logout">로그아웃</Link>
    </div>
  );
};

export default UserInfo;
