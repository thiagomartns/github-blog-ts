import { useContext } from "react";
import { Issue, IssuesListContainer } from "./styles";
import Markdown from "react-markdown";
import { formatDistanceToNow } from "date-fns";
import {
  UserInfoContext,
  UserInfoIssuesProps,
} from "../../../../contexts/UserInfoContext";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";

export const IssuesList = () => {
  const { userIssues, setSelectedIssues } = useContext(UserInfoContext);

  const navigate = useNavigate();

  function getDateAhead(data: any) {
    const dataCriacao = new Date(data);
    return formatDistanceToNow(dataCriacao, { addSuffix: true, locale: ptBR });
  }

  function handleClickIssue(issueChoice: UserInfoIssuesProps) {
    setSelectedIssues(issueChoice);
    navigate(`post/${issueChoice.id}`);
  }

  return (
    <IssuesListContainer>
      {userIssues?.map((issue: UserInfoIssuesProps) => (
        <Issue onClick={() => handleClickIssue(issue)} key={issue?.id}>
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
