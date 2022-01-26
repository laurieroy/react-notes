import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Auth from "../pages/Auth.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Home from "../pages/Home.jsx";
import Nav from "./Nav.jsx";
import { useAppState } from "../AppState.jsx";

export const App = (props) => {
  const { state, dispatch } = useAppState();

  useState(() => {
    const auth = JSON.parse(window.localStorage.getItem("auth"));

    if (auth) {
      dispatch({ type: "auth", payload: auth });
      props.history.push("/dashboard")
    } else {
      props.history.push("/")
    }
  }, []);

  return (
    <>
      <Route path="/" component={Nav} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth/:form" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
};
