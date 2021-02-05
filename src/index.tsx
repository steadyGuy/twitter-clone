import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import "./index.css";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "./theme";
import { store } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter> {/*  creates a history instance for our entire <App> component */}
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
