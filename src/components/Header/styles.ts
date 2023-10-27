import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 35vh;
  background-color: ${(props) => props.theme.colors["base-profile"]};
  display: flex;
  align-items: center;
  justify-content: center;
`;
