import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Context } from "./context/ThemeContext";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
  </Provider>
);
