import React,{useEffect, useState} from "react";
import ProfileHeader from "../../components/ProfileHeader";
import ProctorExamCard from "../../components/ProctorExamCard";
import axios from "axios";

const ProctorIndexPage = () => {

  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExam = async () => {
      const token = localStorage.getItem("token");
      const {data} = await axios.get("http://localhost:4000/api/exams", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setExams(data);
      console.log(data);
    };

    fetchExam();
  }, []);

  return (
    <div className="">
      <ProfileHeader />

      <div className=" mx-auto max-w-7xl ">
        <div className="mt-4 title">
          <h1 className=" text-4xl font-bold text-blue-900 mb-3">Your Exams</h1>
          <p className=" text-gray-700">
            Here you can find all the available which will be proctored. Just
            click on the "Start Now" button to monitor.
          </p>
        </div>

        <div className=" examList flex flex-row gap-3">
          {exams.map((exam, index) => {
            return <ProctorExamCard key={index} exam={exam} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProctorIndexPage;
