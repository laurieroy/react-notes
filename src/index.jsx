import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.css";
import { App } from "./components/App";
import { AppState } from "./AppState.jsx";

ReactDom.render(
  <AppState>
    <Router>
      <App />
    </Router>
  </AppState>,
  document.querySelector("#root")
);
