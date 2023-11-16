import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";
import { NavLink } from "react-router-dom";
import RegisterImg from "../assets/registerImg.jpg";

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
    <div className="h-screen w-full bg-white flex items-center justify-center relative z-20 overflow-hidden">
      <div
        className="bg-blue-100 absolute -z-10"
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "200px",
          top: "-180px",
          right: "-180px",
        }}
      ></div>
      <div
        className=" bg-white absolute -z-10"
        style={{
          width: "400px",
          height: "400px",
          border: "70px solid blue",
          borderRadius: "200px",
          bottom: "-50px",
          left: "-50px",
        }}
      ></div>
      <div
        className=" bg-white h-auto grid shadow-lg shadow-blue-500/50"
        style={{ width: "85%", gridTemplateColumns: "0.45fr 0.55fr" }}
      >
        <div className=" bg-blue-600 h-full">
          <div className="h-full w-full mt-14 text-center overflow-hidden">
            <div>
              {" "}
              <h1 className=" text-gray-100 text-4xl font-bold">
                Welcome to our website
              </h1>
              <p className=" text-gray-100 text-lg mt-4 text-center mt-5">
                Register now to get access to all the cool and great features.
              </p>
            </div>

            <div className=" -mt-14">
              <img src={RegisterImg} alt="" />
            </div>
          </div>
        </div>
        <div className=" bg-white h-full">
          <div className=" h-full w-full overflow-hidden">
            <div className=" upper-part flex flex-row items-center gap-5 mt-6 pr-10 w-full text-center justify-end">
              <span className=" text-sm text-gray-500">
                Don't have an account?
              </span>
              <NavLink
                className={
                  " text-sm bg-blue-600 text-white px-4 rounded-sm py-2"
                }
                to={"/login"}
              >
                Login
              </NavLink>
            </div>

            <div className=" title mb-4" style={{ marginLeft: "80px" }}>
              <h1 className=" text-4xl font-bold mt-3 text-gray-700">
                Create your account
              </h1>
            </div>

            <div className=" form text-gray-700" style={{ marginLeft: "80px" }}>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name" className=" block mb-2 mt-5">
                  Full name
                </label>
                <input
                  style={{
                    paddingInlineStart: "15px",
                    paddingInlineEnd: "20px",
                    width: "330px",
                  }}
                  type="text"
                  id="name"
                  placeholder="Your name"
                />
                <label htmlFor="email" className=" block mb-2 mt-5">
                  Email address
                </label>
                <input
                  style={{
                    paddingInlineStart: "15px",
                    paddingInlineEnd: "20px",
                    width: "330px",
                  }}
                  type="text"
                  id="email"
                  placeholder="Example@email.com"
                />
                <label htmlFor="password" className=" block mb-2 mt-5">
                  Password
                </label>
                <input
                  style={{
                    paddingInlineStart: "15px",
                    paddingInlineEnd: "20px",
                    width: "330px",
                  }}
                  type="text"
                  id="password"
                  placeholder=" Enter password"
                  className=" block"
                />

                <div className=" mt-5">
                  <label htmlFor="role" className="">
                    Role -
                  </label>
                  <select
                    id="role"
                    value={role}
                    onChange={(event) => {
                      setRole(event.target.value);
                    }}
                  >
                    <option value="optiona">Proctor</option>
                    <option value="optionb">Student</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="block bg-blue-600 font-semibold py-3 rounded mt-5 text-sm text-white"
                  style={{ paddingInline: "100px" }}
                >
                  Create your account
                </button>
              </form>
            </div>

            <div
              className="bottom text-sm mt-4 text-gray-700 mb-4"
              style={{ marginLeft: "80px" }}
            >
              Already have an account?{" "}
              <NavLink to={"/login"} className="text-blue-600">
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
