import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between">
      <nav>
        <Link
          className=" font-semibold text-2xl"
          href="/"
          style={{ color: "#014DA5" }}
        >
          PROCTORPRO
        </Link>
      </nav>

      <nav className=" flex flex-row gap-8 text-gray-500 font-semibold items-center">
        <Link to={"/"}>Home</Link>
        <Link to={""}>Benefits</Link>
        <Link to={""}>About</Link>
        <Link to={""}>Contact</Link>
      </nav>
      <nav className=" flex gap-4 items-center">
        <Link to={"/login"} className=" text-gray-500 font-semibold">Login</Link>
        <Link
          to={"/register"}
          className="px-8 text-white rounded-full  py-2"
          style={{ backgroundColor: "#014DA5" }}
        >
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
