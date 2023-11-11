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
      {isReady && (
        <>
          Exam Name - {examDetails.examName} Exam Date - { examDetails.examDate}{" "}
          {<CountdownTimer examDuration={examDetails.examDuration * 60} />}{" "}
        </>
      )}
      {isReady && <StudentQuestionItem questionSets={questionSets} />}
    </>
  );
};

export default StudentExamPage;
