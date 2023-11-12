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
  margin: -3rem 0 3rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors["base-profile"]};

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }

  .userBio {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    height: 192px;

    @media (min-width: 767px) {
      align-items: flex-start;
      gap: 0;
      padding: 0 2rem;
      justify-content: space-between;
      .userNameandBio {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
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
  text-align: center;
  @media (min-width: 767px) {
    text-align: left;
  }
`;

export const UserBio = styled.p`
  font: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors["base-text"]};
  font-size: 0.875rem;
  text-align: center;
  width: 25ch;

  @media (min-width: 767px) {
    text-align: left;
    width: 100%;
    font-size: 1rem;
  }
`;

export const UserLinkContainer = styled.div`
  @media (min-width: 767px) {
    position: absolute;
    right: 5%;
  }
  a:link,
  a:visited {
    text-decoration: none;
    font: ${(props) => props.theme.fonts.bold};
    color: ${(props) => props.theme.colors["brand-blue"]};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 3rem;

    @media (min-width: 767px) {
      margin: 0;
    }
  }
`;

export const UserInfoList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;

  @media (min-width: 767px) {
    flex-direction: row;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .icon {
      color: ${(props) => props.theme.colors["base-label"]};
      font-size: 1.125rem;
    }

    span {
      color: ${(props) => props.theme.colors["base-subtitle"]};
      font: ${(props) => props.theme.fonts.regular};
    }
  }
`;
