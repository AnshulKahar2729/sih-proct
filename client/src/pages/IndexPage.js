import React, { useContext, useEffect, useState } from "react";
import Header from "../components/indexpagecomponents/Header";
import Footer from "../components/indexpagecomponents/Footer";
import Benefits from "../components/indexpagecomponents/Benefits";
import Hero from "../components/indexpagecomponents/Hero";
import { UserContext } from "../context/UserContextProvider";
import StudentIndexPage from "./student/StudentIndexPage";
import ProctorIndexPage from "./proctor/ProctorIndexPage";
import SystemFeatures from "../components/indexpagecomponents/SystemFeatures";


const IndexPage = () => {
  const [isToken, setIsToken] = useState(false); // to check if token is present in local storage
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsToken(true);
    }
  }, []);

  return (
    <>
      <div className=" w-screen bg-gray-100 h-auto">
        {isToken && user?.role === "student" ? <StudentIndexPage /> : null}
        {isToken && user?.role === "proctor" ? <ProctorIndexPage /> : null}
      </div>
      <div className=" max-w-7xl h-auto mx-auto p-4 ">
        {!user && (
          <>
            <Header />
            <Hero />
            <Benefits />
            <SystemFeatures/>
          </>
        )}
      </div>
      {!user && (
        <div className="mx-auto">
          <Footer />
        </div>
      )}
    </>
  );
};

export default IndexPage;
