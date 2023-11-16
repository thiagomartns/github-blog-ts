import { useContext } from "react";
import { UserInfoList, UserName } from "../../components/UserCard/styles";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import {
  PostCardContainer,
  PostContainerStyles,
  PostLinkContainer,
} from "./styles";
import {
  ArrowSquareOut,
  CalendarBlank,
  ChatText,
  GithubLogo,
} from "@phosphor-icons/react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import Markdown from "react-markdown";

export const Post = () => {
  const { selectedIssues } = useContext(UserInfoContext);

  function getDateAhead(data: any) {
    const dataCriacao = new Date(data);
    return formatDistanceToNow(dataCriacao, { addSuffix: true, locale: ptBR });
  }

  return (
    <PostContainerStyles>
      <PostCardContainer>
        <UserName>{selectedIssues?.title}</UserName>
        <UserInfoList>
          <li>
            <div className="icon">
              <GithubLogo />
            </div>
            <span>{selectedIssues?.user.login}</span>
          </li>
          <li>
            <div className="icon">
              <CalendarBlank />
            </div>
            <span>{getDateAhead(selectedIssues?.created_at)}</span>
          </li>
          <li>
            <div className="icon">
              <ChatText />
            </div>
            <span>
              {selectedIssues?.comments === 0
                ? "Nenhum comentário"
                : selectedIssues?.comments === 1
                ? "comentário"
                : "comentários"}
            </span>
          </li>
        </UserInfoList>
        <PostLinkContainer>
          <a href={selectedIssues?.html_url}>
            VER NO GITHUB
            <ArrowSquareOut />
          </a>
        </PostLinkContainer>
      </PostCardContainer>
      <p>
        <Markdown>{selectedIssues?.body}</Markdown>
      </p>
    </PostContainerStyles>
  );
};
