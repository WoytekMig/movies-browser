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

  body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  word-break: break-word;
  background: ${({ theme }) => theme.colors.whisper};
  padding: 16px;
  color: ${({ theme }) => theme.colors.black};
}

  #root {
    font-family: "Poppins", sans-serif;
    background-color: ${({ theme }) => theme.colors.whisper};
  }
`;
