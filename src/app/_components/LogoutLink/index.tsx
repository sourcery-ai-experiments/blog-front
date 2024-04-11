"use client";

import axios from "axios";

const LogoutLink = () => {
  const handleLogout = async () => {
    await axios.post("/logout");
    location.href = "/";
  };

  return <div onClick={handleLogout}>로그아웃</div>;
};

export default LogoutLink;
