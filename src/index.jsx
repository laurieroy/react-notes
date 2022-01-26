import React from "react";
import ReactDom, { BrowserRouter as Router} from "react-dom";

import "./styles.css";
import {App} from "./components/App"

ReactDom.render(<App />, document.querySelector("#root"));

ReactDom.render(
  <AppState>
    <Router>
      <App />
    </Router>
  </AppState>,
  document.querySelector("#root")
);