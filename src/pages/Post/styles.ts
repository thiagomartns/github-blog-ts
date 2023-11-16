import styled from "styled-components";
import {
  UserCardContainer,
  UserLinkContainer,
} from "../../components/UserCard/styles";

export const PostContainerStyles = styled.div`
  max-width: 350px;
  margin: 0 auto;

  @media (min-width: 767px) {
    max-width: 996px;
    display: flex;
    flex-direction: column;
  }

  p {
    color: ${(props) => props.theme.colors["base-text"]};
    text-align: justify;
    @media (min-width: 767px) {
      width: 100%;
    }
  }
`;

export const PostCardContainer = styled(UserCardContainer)`
  @media (min-width: 767px) {
    display: flex;
    flex-direction: column;
    position: relative;
  }
`;

export const PostLinkContainer = styled(UserLinkContainer)`
  @media (min-width: 767px) {
    position: absolute;
    right: 5%;
    top: 25%;
  }
`;

export const TextContainer = styled.p`
  margin-bottom: 3rem;

  .react-markdown {
    white-space: pre-wrap;
    line-height: 1.6;
    hyphens: auto;
  }
`;
