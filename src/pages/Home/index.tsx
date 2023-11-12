import { useContext } from "react";
import {
  HomeContainer,
  Issue,
  IssuesList,
  SearchFormContainer,
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
import { StyledTextInput } from "../../components/styled-components/styled-textinput";

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
      <SearchFormContainer>
        <div className="publication">
          <h1>Publicações</h1>
          <span>6 publicações</span>
        </div>
        <StyledTextInput size="md" placeholder="Buscar conteúdo" />
      </SearchFormContainer>
      <IssuesList>
        <Issue>
          <div className="title">
            <h1>Javascript data types and data structures</h1>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have.{" "}
          </p>
        </Issue>
        <Issue>
          <div className="title">
            <h1>Javascript data types and data structures</h1>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have.{" "}
          </p>
        </Issue>
        <Issue>
          <div className="title">
            <h1>Javascript data types and data structures</h1>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have.{" "}
          </p>
        </Issue>
        <Issue>
          <div className="title">
            <h1>Javascript data types and data structures</h1>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have.{" "}
          </p>
        </Issue>
      </IssuesList>
    </HomeContainer>
  );
};
