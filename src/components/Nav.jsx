import React from "react";
import { Link } from "react-router-dom";

import { useAppState } from "../AppState.jsx";

const Nav = (props) => {
  const { dispatch } = useAppState();

  return (
    <header>
      <h1>Note Taking App</h1>
      <nav>
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/auth/signup">
          <div>Signup</div>
        </Link>
        <Link to="/auth/login">
          <div>Login</div>
        </Link>
        <div
          onClick={() => {
            dispatch({ type: "logout" });
            props.history.push("/");
          }}
        >
          Logout
        </div>
      </nav>
    </header>
  );
};

export default Nav;
