import { useContext } from "react";
import { SearchFormContainer } from "./styles";
import { StyledTextInput } from "../../../../components/styled-components/styled-textinput";
import { UserInfoContext } from "../../../../contexts/UserInfoContext";

export const SearchIssues = () => {
  const { userIssues } = useContext(UserInfoContext);

  return (
    <SearchFormContainer>
      <div className="publication">
        <h1>Publicações</h1>
        <span>{userIssues.length} publicações</span>
      </div>
      <StyledTextInput size="md" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  );
};
