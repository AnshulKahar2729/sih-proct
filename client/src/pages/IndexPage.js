import React, { useState } from "react";
import Header from "../components/indexpagecomponents/Header";
import StudentIndexPage from "./StudentIndexPage";
import ProctorIndexPage from "./ProctorIndexPage";
import Footer from "../components/indexpagecomponents/Footer";
import Benefits from "../components/indexpagecomponents/Benefits";
import Hero from "../components/indexpagecomponents/Hero";

const IndexPage = () => {
  const [role, setRole] = useState("");

  return (
    <>
      <div className=" max-w-7xl h-auto mx-auto p-4 ">
        {role === "student" ? <StudentIndexPage /> : null}
        {role === "proctor" ? <ProctorIndexPage /> : null}
        <Header />
        <Hero/>
        <Benefits/>
      </div>
      <div className="mx-auto">
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;
