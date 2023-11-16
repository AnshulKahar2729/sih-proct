import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [user, setUser] = useState(null);
  const { user: ctxUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, email, password, role);

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/register",
        {
          username,
          email,
          password,
          role,
        },
        {
          "Access-Control-Allow-Origin": "*",
        }
      );

      if (data) {
        // set the auth token in local storage
        localStorage.setItem("token", data.token);
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="text"
          value={role}
          placeholder="role"
          onChange={(event) => setRole(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;
