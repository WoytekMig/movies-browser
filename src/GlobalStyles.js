import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  #root {
    font-family: "Poppins", sans-serif;
    background-color: ${({ theme }) => theme.colors.whisper};
  }
`;
