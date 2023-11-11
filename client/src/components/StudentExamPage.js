import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentQuestionItem from "./StudentQuestionItem";
import CountdownTimer from "./CountDown";

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
      <div className="body w-full h-full p-2 flex flex-col gap-2 bg-black">
        <div className="upperPart h-20 w-full bg-white">
          {/* <Timer/>   */}
          {isReady && (
            <>
              Exam Name - {examDetails.examName} Exam Date -{" "}
              {examDetails.examDate}{" "}
              {<CountdownTimer examDuration={examDetails.examDuration * 60} />}{" "}
            </>
          )}
        </div>
        <div className="lowerPart w-full flex  h-full gap-1 bg-green-600">
          <div
            className="MCQ_Section h-full bg-yellow-400"
            style={{ width: "70%" }}
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
