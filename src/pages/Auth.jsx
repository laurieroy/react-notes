import React, { useEffect, useState } from "react";
import { useAppState } from "../AppState.jsx";

const Auth = (props) => {
  const type = props.match.params.form;
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [userData, setUserData] = useState(null);
  const { state, dispatch } = useAppState();
  state;

  useEffect(() => {
    if (userData) {
      const { token, user } = userData;

      dispatch({ type: "auth", payload: { token, username: user.username } });
      window.localStorage.setItem(
        "auth",
        JSON.stringify({ token, username: user.username })
      );
      props.history.push("/dashboard");
    }
  }, [userData]);

  const actions = {
    signup: async () => {
      const response = await fetch(state.url + "/users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      return await response.json();
    },
    login: async () => {
      const response = await fetch(state.url + "/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      return await response.json();
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    actions[type]().then((data) => {
      setUserData(data);
    });
  };

  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="password"
          onChange={handleChange}
        />
        <input type="submit" value={type} />
      </form>
    </div>
  );
};

export default Auth;
