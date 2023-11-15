import { useContext } from "react";
import { Issue, IssuesListContainer } from "./styles";
import Markdown from "react-markdown";
import { formatDistanceToNow } from "date-fns";
import {
  UserInfoContext,
  UserInfoIssuesProps,
} from "../../../../contexts/UserInfoContext";
import { ptBR } from "date-fns/locale";

export const IssuesList = () => {
  const { userIssues } = useContext(UserInfoContext);

  function getDateAhead(data: any) {
    const dataCriacao = new Date(data);
    return formatDistanceToNow(dataCriacao, { addSuffix: true, locale: ptBR });
  }

  return (
    <IssuesListContainer>
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
    </IssuesListContainer>
  );
};
