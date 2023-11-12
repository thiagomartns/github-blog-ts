import { useContext } from "react";
import {
  HomeContainer,
  UserAvatar,
  UserBio,
  UserCard,
  UserInfoList,
  UserLinkContainer,
  UserName,
} from "./styles";
import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";
import { UserInfoContext } from "../../contexts/UserInfoContext";

export const Home = () => {
  const { userInfoData } = useContext(UserInfoContext);

  return (
    <HomeContainer>
      <UserCard>
        <UserAvatar src={userInfoData?.avatar_url} alt="" />
        <div className="userBio">
          <div className="userNameandBio">
            <UserName>{userInfoData?.name}</UserName>
            <UserBio>{userInfoData?.bio}</UserBio>
          </div>
          <UserInfoList>
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
          </UserInfoList>
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
