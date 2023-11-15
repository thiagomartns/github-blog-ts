import { useContext } from "react";
import { HomeContainer, SearchFormContainer } from "./styles";

import { UserInfoContext } from "../../contexts/UserInfoContext";
import { StyledTextInput } from "../../components/styled-components/styled-textinput";

import { UserCard } from "../../components/UserCard";
import { IssuesList } from "./components/IssuesList";

export const Home = () => {
  const { userIssues } = useContext(UserInfoContext);

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
      <IssuesList />
    </HomeContainer>
  );
};
