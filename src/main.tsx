import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./routes";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);
