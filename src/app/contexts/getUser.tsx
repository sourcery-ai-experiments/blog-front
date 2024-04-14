"use client";

import { createContext, useContext, useState } from "react";

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value?: UserContextType;
}) => {
  const [user, setUser] = useState<User | null>(value?.user ?? null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
