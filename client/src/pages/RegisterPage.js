import axios from "axios";
import { set } from "mongoose";
import React from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password, role);

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/register",
        {
          email,
          password,
          role,
        },
        {
          "Access-Control-Allow-Origin": "*",
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="text"
          value={role}
          onChange={(event) => setRole(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;
