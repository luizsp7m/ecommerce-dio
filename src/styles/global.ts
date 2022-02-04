import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  
  body, input, textarea, select, button {
    font: 1.4rem 'Inter', sans-serif;
  }

  body {
    background: #111827;
  }

  @media(max-width: 475px) {
    html {
      font-size: 50%;
    }
  }
`;