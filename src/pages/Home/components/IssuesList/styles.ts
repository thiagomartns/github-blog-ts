import styled from "styled-components";

export const IssuesListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;

  @media (min-width: 767px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    gap: 0;
  }
`;

export const Issue = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1.5rem;
  background-color: ${(props) => props.theme.colors["base-post"]};
  border-radius: 10px;
  width: 300px;

  @media (min-width: 767px) {
    width: 425px;
    margin-bottom: 3rem;
  }

  .title {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h1 {
      color: ${(props) => props.theme.colors["base-title"]};
      font: ${(props) => props.theme.fonts.bold};
      font-size: 1rem;
      width: 20ch;

      @media (min-width: 767px) {
        font-size: 1.25rem;
        width: 100%;
      }
    }

    span {
      color: ${(props) => props.theme.colors["base-span"]};
      font: ${(props) => props.theme.fonts.regular};
      font-size: 0.5rem;
      margin-top: 0.5rem;

      @media (min-width: 767px) {
        font-size: 0.75rem;
        width: 20%;
        text-align: right;
      }
    }
  }

  p {
    color: ${(props) => props.theme.colors["base-text"]};
    font: ${(props) => props.theme.fonts.regular};
    font-size: 1rem;
  }
`;
