import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";
import Avatar from "../assets/avatar.jpg";
import { NavLink } from "react-router-dom";

const ProfileHeader = () => {
  const { user } = useContext(UserContext);

  

  return (
    <>
      <div className=" bg-white">
        <header className=" max-w-7xl mx-auto flex flex-row items-center justify-between bg-white pt-2 pl-2 pb-4">
          <nav>
            <Link
              className=" font-semibold text-2xl"
              href="/"
              style={{ color: "#014DA5" }}
            >
              PROCTORPRO
            </Link>
          </nav>

          <nav>
            
          </nav>

          <nav className=" text-gray-700 flex gap-4 items-center pr-2 pt-2">
            <div>
              Hi,{" "}
              <span className=" font-semibold text-blue-700">{user?.name}</span>
            </div>
            <NavLink
              to={"/profile"}
              className="bg-black border border-black"
              style={{ width: "50px", height: "50px", borderRadius: "25px" }}
            >
              <img src={Avatar} alt="" style={{ borderRadius: "25px" }} />
            </NavLink>

            <Link className=" text-gray-600 hover:text-blue-600" to={"/addExam"}>Add Exam</Link>
          </nav>
        </header>
      </div>
    </>
  );
};

export default ProfileHeader;
