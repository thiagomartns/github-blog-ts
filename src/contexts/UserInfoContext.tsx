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

interface UserInfoIssuesProps {
  title: string;
  body: string;
  created_at: string;
}

interface UserInfoContextType {
  userInfoData: any;
  userIssues: any;
}

interface UserInfoProviderProps {
  children: ReactNode;
}

export const UserInfoContext = createContext({} as UserInfoContextType);

export function UserInfoProvider({ children }: UserInfoProviderProps) {
  const [userInfoData, setUserInfoData] = useState<UserInfoDataProps | null>();
  const [userIssues, setUserIssues] = useState<UserInfoIssuesProps | null>();

  const username = "rocketseat-education";

  async function loadUserIssues() {
    const response = await fetch(
      `https://api.github.com/repos/${username}/reactjs-github-blog-challenge/issues/1`
    );
    const data = await response.json();
    setUserIssues(data);
  }

  async function loadUserInfo() {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setUserInfoData(data);
  }

  useEffect(() => {
    loadUserIssues();
    loadUserInfo();
  }, []);

  return (
    <UserInfoContext.Provider value={{ userInfoData, userIssues }}>
      {children}
    </UserInfoContext.Provider>
  );
}
