import React, { useState } from "react";
import Header from "../components/indexpagecomponents/Header";

const IndexPage = () => {
  const [role, setRole] = useState("");

  return (
    <div className="max-w-6xl mx-auto p-4 border border-black">
      {role === "student" ? <StudentIndexPage /> : null}
      {role === "proctor" ? <ProctorIndexPage /> : null}
      <Header />
    </div>
  );
};

export default IndexPage;
