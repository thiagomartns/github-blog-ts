import { HomeContainer } from "./styles";

import { UserCard } from "../../components/UserCard";
import { IssuesList } from "./components/IssuesList";
import { SearchIssues } from "./components/SearchIssues";

export const Home = () => {
  return (
    <HomeContainer>
      <UserCard />
      <SearchIssues />
      <IssuesList />
    </HomeContainer>
  );
};
