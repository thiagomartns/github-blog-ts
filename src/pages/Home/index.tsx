import { useContext } from "react";
import {
  HomeContainer,
  Issue,
  IssuesList,
  SearchFormContainer,
} from "./styles";

import {
  UserInfoContext,
  UserInfoIssuesProps,
} from "../../contexts/UserInfoContext";
import { StyledTextInput } from "../../components/styled-components/styled-textinput";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import Markdown from "react-markdown";
import { UserCard } from "../../components/UserCard";

export const Home = () => {
  const { userIssues } = useContext(UserInfoContext);

  function getDateAhead(data: any) {
    const dataCriacao = new Date(data);
    return formatDistanceToNow(dataCriacao, { addSuffix: true, locale: ptBR });
  }

  return (
    <HomeContainer>
      <UserCard />
      <SearchFormContainer>
        <div className="publication">
          <h1>Publicações</h1>
          <span>{userIssues.length} publicações</span>
        </div>
        <StyledTextInput size="md" placeholder="Buscar conteúdo" />
      </SearchFormContainer>
      <IssuesList>
        {userIssues?.map((issue: UserInfoIssuesProps) => (
          <Issue key={issue?.id}>
            <div className="title">
              <h1>{issue?.title}</h1>
              <span>{getDateAhead(issue?.created_at)}</span>
            </div>
            <Markdown>
              {issue?.body ? issue.body.substring(0, 250) + "..." : ""}
            </Markdown>
          </Issue>
        ))}
      </IssuesList>
    </HomeContainer>
  );
};
