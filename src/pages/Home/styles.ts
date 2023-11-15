import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 350px;
  margin: 0 auto;

  @media (min-width: 767px) {
    max-width: 996px;
  }
`;

export const SearchFormContainer = styled.section`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 767px) {
    gap: 0.5rem;
  }
  .publication {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font: ${(props) => props.theme.fonts.bold};
      font-size: 1.125rem;
      color: white;
    }

    span {
      font: ${(props) => props.theme.fonts.regular};
      font-size: 0.825rem;
      color: ${(props) => props.theme.colors["base-span"]};
    }
  }
`;
