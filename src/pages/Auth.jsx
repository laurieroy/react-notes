// import React, { useState } from "react";
// import { useAppState } from "../AppState.jsx";

// const Auth = (props) => {
//   const type = props.match.params.form;
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const { dispatch } = useAppState();

//   const action = {
//     signup: {
//       action: "signup",
//       payload: formData,
//     },
//     login: {
//       action: "login",
//       payload: formData,
//     },
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     dispatch([action.type]);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//         <input
//           type="tpassword"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         <input type="submit" value={type} />
//       </form>
//     </div>
//   );
// };

// export default Auth;
