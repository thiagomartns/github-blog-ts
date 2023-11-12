import { useEffect, useState } from "react";
import {
  HomeContainer,
  UserAvatar,
  UserBio,
  UserCard,
  UserLinkContainer,
  UserName,
} from "./styles";
import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";

interface UserInfoDataProps {
  avatar_url: string;
  login: string;
  name: string;
  bio: string;
  html_url: string;
  company: string;
  followers: number;
}

export const Home = () => {
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
    <HomeContainer>
      <UserCard>
        <UserAvatar src={userInfoData?.avatar_url} alt="" />
        <div className="userBio">
          <div className="userNameandBio">
            <UserName>{userInfoData?.name}</UserName>
            <UserBio>{userInfoData?.bio}</UserBio>
          </div>
          <div className="userGHStats">
            <ul>
              <li>
                <div className="icon">
                  <GithubLogo />
                </div>
                <span className="statsInfo">{userInfoData?.login}</span>
              </li>
              <li>
                <div className="icon">
                  <Buildings />
                </div>
                <span className="statsInfo">{userInfoData?.company}</span>
              </li>
              <li>
                <div className="icon">
                  <Users />
                </div>
                <span className="statsInfo">
                  {userInfoData?.followers} seguidores
                </span>
              </li>
            </ul>
          </div>
        </div>
        <UserLinkContainer>
          <a href={userInfoData?.html_url}>
            GITHUB
            <ArrowSquareOut />
          </a>
        </UserLinkContainer>
      </UserCard>
    </HomeContainer>
  );
};
