import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;

  }
  
  body {
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors["base-background"]};
  }

  h1 {
    color: ${(props) => props.theme.colors["base-title"]};
    font: ${(props) => props.theme.fonts.bold};
  }
`;
