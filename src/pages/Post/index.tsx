import { useContext } from "react";
import { UserCardContainer, UserName } from "../../components/UserCard/styles";
import { UserInfoContext } from "../../contexts/UserInfoContext";

export const Post = () => {
  const { selectedIssues } = useContext(UserInfoContext);

  return (
    <UserCardContainer>
      <UserName>{selectedIssues?.title}</UserName>
    </UserCardContainer>
  );
};
