import React, { useState } from "react";
import Header from "../components/indexpagecomponents/Header";
import StudentIndexPage from "./StudentIndexPage";
import ProctorIndexPage from "./ProctorIndexPage";
import Footer from "../components/indexpagecomponents/Footer";

const IndexPage = () => {
  const [role, setRole] = useState("");

  return (
    <>
      <div className=" max-w-6xl mx-auto p-4 border border-black">
        {role === "student" ? <StudentIndexPage /> : null}
        {role === "proctor" ? <ProctorIndexPage /> : null}
        <Header />
      </div>
      <div className="mx-auto">
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;
