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
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const Home = () => {
  const { userInfoData, userIssues } = useContext(UserInfoContext);

  function getDateAhead(data: any) {
    const dataCriacao = new Date(data);
    return formatDistanceToNow(dataCriacao, { addSuffix: true, locale: ptBR });
  }

  console.log(userIssues);

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
            <h1>{userIssues?.title}</h1>
            <span>{getDateAhead(userIssues?.created_at)}</span>
          </div>
          <p>{userIssues?.body.substring(0, 200)}...</p>
        </Issue>
      </IssuesList>
    </HomeContainer>
  );
};
