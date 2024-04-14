"use client";

import { UserProvider } from "./app/contexts/getUser";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Providers;
