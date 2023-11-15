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

export interface UserInfoIssuesProps {
  title: string | null;
  body?: string | null;
  created_at: string | null;
  id: number | null;
}

interface UserInfoContextType {
  userInfoData: any;
  userIssues: any;
  setSelectedIssues: React.Dispatch<
    React.SetStateAction<UserInfoIssuesProps | null>
  >;
  selectedIssues: UserInfoIssuesProps | null;
}

interface UserInfoProviderProps {
  children: ReactNode;
}

export const UserInfoContext = createContext({} as UserInfoContextType);

export function UserInfoProvider({ children }: UserInfoProviderProps) {
  const [userInfoData, setUserInfoData] = useState<UserInfoDataProps | null>();
  const [userIssues, setUserIssues] = useState<UserInfoIssuesProps[] | null>(
    []
  );
  const [selectedIssues, setSelectedIssues] =
    useState<UserInfoIssuesProps | null>(null);

  const username = "thiagomartns";

  async function loadUserIssues() {
    let i = 1;
    const promises = [];

    while (true) {
      const url = `https://api.github.com/repos/${username}/reactjs-github-blog-challenge/issues/${i}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          break;
        }

        const data = await response.json();
        promises.push(data);
        i++;
      } catch (error) {
        console.log(error);
        break;
      }
    }

    try {
      setUserIssues(promises);
    } catch (error) {
      console.log(error);
    }
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
    <UserInfoContext.Provider
      value={{ userInfoData, userIssues, setSelectedIssues, selectedIssues }}
    >
      {children}
    </UserInfoContext.Provider>
  );
}
