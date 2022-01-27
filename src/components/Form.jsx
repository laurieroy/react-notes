import React, { useState } from "react";

import { useAppState } from "../AppState.jsx";

const Form = (props) => {
  const { state, dispatch } = useAppState();
  const { token } = state;
  const action = props.match.params.action;
  const [formData, setFormData] = useState(state[action]);
  const actions = {
    edit: () => {
      return fetch(state.url + "/notes/" + state.edit.id, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + token,
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json());
    },
    new: () => {
      return fetch(state.url + "/notes", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + token,
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json());
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    actions[action]().then((data) => {
      props.getNotes();
      props.history.push("/dashboard/");
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="body"
          value={formData.body}
          onChange={handleChange}
        />
        <input type="submit" value={action} />
      </form>
    </div>
  );
};

export default Form;
