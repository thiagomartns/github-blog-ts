import { createContext, ReactNode, useEffect, useState } from "react";

interface UserInfoDataProps {
  avatar_url: string;
  login: string;
  name: string;
  bio: string;
  html_url: string;
  company: string;
  followers: number;
}

interface UserInfoContextType {
  userInfoData: any;
}

interface UserInfoProviderProps {
  children: ReactNode;
}

export const UserInfoContext = createContext({} as UserInfoContextType);

export function UserInfoProvider({ children }: UserInfoProviderProps) {
  const [userInfoData, setUserInfoData] = useState<UserInfoDataProps | null>();

  const username = "thiagomartns";

  async function loadUserInfo() {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setUserInfoData(data);
  }

  useEffect(() => {
    loadUserInfo();
  }, []);

  return (
    <UserInfoContext.Provider value={{ userInfoData }}>
      {children}
    </UserInfoContext.Provider>
  );
}
