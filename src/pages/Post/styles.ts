import styled from "styled-components";

export const PostContainerStyles = styled.div`
  max-width: 350px;
  margin: 0 auto;

  @media (min-width: 767px) {
    max-width: 996px;
  }

  p {
    color: ${(props) => props.theme.colors["base-text"]};
    text-align: justify;
    @media (min-width: 767px) {
      width: 100%;
    }
  }
`;
