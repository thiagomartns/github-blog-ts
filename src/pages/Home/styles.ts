import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 350px;
  margin: 0 auto;

  @media (min-width: 767px) {
    max-width: 996px;
  }
`;

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.75rem 1.5rem;
  margin-top: -4rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors["base-profile"]};

  .userBio {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    .userGHStats {
      margin: 1rem 0;
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        li {
          display: flex;
          gap: 0.5rem;

          .icon {
            color: ${(props) => props.theme.colors["base-label"]};
          }

          span {
            color: ${(props) => props.theme.colors["base-subtitle"]};
          }
        }
      }
    }
  }
`;

export const UserAvatar = styled.img`
  width: 60%;
  border-radius: 8px;
  @media (min-width: 767px) {
    width: 20%;
  }
`;

export const UserName = styled.h1`
  font: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors["base-title"]};
  font-size: 1.5rem;
`;

export const UserBio = styled.p`
  font: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors["base-text"]};
  font-size: 0.875rem;
  text-align: center;
  width: 25ch;
`;

export const UserLinkContainer = styled.div`
  a:link,
  a:visited {
    text-decoration: none;
    font: ${(props) => props.theme.fonts.bold};
    color: ${(props) => props.theme.colors["brand-blue"]};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
