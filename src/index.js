import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
