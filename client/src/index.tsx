import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./lib/redux/init/store";
import { App } from "./App";

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
