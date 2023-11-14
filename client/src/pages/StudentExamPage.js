import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentQuestionItem from "../components/StudentQuestionItem";
import CountdownTimer from "../components/CountDown";

const StudentExamPage = () => {
  const [questionSets, setQuestionSets] = useState();
  const [examDetails, setExamDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const fetchQuestionSets = async () => {
      setIsLoading(true);
      const { data } = await axios.get(
        "http://localhost:4000/api/exam/654bca782c57f83f514540c3"
      );
      console.log(data.questions);
      setExamDetails(data);
      setQuestionSets(data.questions);
      setIsLoading(false);
      setIsReady(true);
    };

    fetchQuestionSets();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="body w-full h-full  flex flex-col gap-2 bg-studentExamPageBGColor">
        <div className="upperPart  w-full ">
          {isReady && (
            <div  
                className=" p-5 rounded-md flex justify-around align-middle items-center text-2xl font-bold font-seif text-black"
                style={{
                  // backgroundColor: "#4158D0" , backgroundImage:" linear-gradient(90deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",  
                  backgroundColor: "white",               
                  // boxShadow : "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                }}  
            >
              <p>Exam Name - {examDetails.examName} </p>
              {/* <p>Exam Date - {examDetails.examDate}</p> */}
              {<CountdownTimer examDuration={examDetails.examDuration * 60} />}{" "}
            </div>
          )}
        </div>
        <div className="lowerPart w-full flex  h-full gap-2 ">
          <div
            className="MCQ_Section w-full h-full p-8 rounded-md "
            style={{ width: "70%",
            // backgroundColor: "#D8DFF6",
            // boxShadow : "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }}
          >
            {isReady && <StudentQuestionItem questionSets={questionSets} />}
          </div>
          <div
            className="WEBRTC_Section h-full p-1 w-auto flex flex-col gap-1 bg-orange-400"
            style={{ width: "30%" }}
          >
            <div className="Proctor h-1/2 w-full bg-red-600"></div>
            <div className="Student h-1/2 w-full bg-purple-700"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentExamPage;
