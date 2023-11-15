import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 35vh;
  background-color: ${(props) => props.theme.colors["base-border"]};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    &:hover {
      cursor: pointer;
    }
  }
`;
