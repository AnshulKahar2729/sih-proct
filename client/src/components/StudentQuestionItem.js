import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentQuestionItem = ({ questionSets }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    if (currentQuestion === questionSets?.length - 1) {
      alert("Exam Finished");
      setCurrentQuestion(0);
      navigate("/result");
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
  };

  useEffect(() => {
    const optionElements = document.querySelectorAll(".option");

    // Set the class of the other option elements to "bg-white"
    optionElements.forEach((optionElement) => {
      optionElement.className = "option border-black border";
    });
  }, [currentQuestion]);

  const optionClickHandler = (event) => {
    event.target.className =
      "option bg-primary text-black border-primaryBorder border";
    setSelectedAnswer(event.target.innerText);

    // Get all of the option elements
    const optionElements = document.querySelectorAll(".option");

    // Set the class of the other option elements to "bg-white"
    optionElements.forEach((optionElement) => {
      if (optionElement !== event.target) {
        optionElement.className = "option border-black border";
      }
    });
  };

  return (
    <div
      className="p-5 bg-white rounded-md shadow-md shadow-black/50 transition-all"
      style={{
        backgroundColor: "white",
        // backgroundImage:
        // "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
        // boxShadow: "rgba(0, 0, 0, 0.5) 0px 4px 12px",
      }}
    >
      <div
        className="text-2xl font-bold flex items-center text-gray-700"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "1rem",
          background: "rgba(255, 255, 255, 0.3)", // Use rgba for alpha transparency
          padding: "1.1rem",
        }}
      >
        <span
          className="bg-white p-2 text-2xl rounded-md mr-5"
          style={{ color: "#014DA5" }}
        >
          Question {currentQuestion + 1}
        </span>
        {questionSets[currentQuestion]?.question}
      </div>

      <div className="p-6 flex flex-col gap-3">
        <div className="" onClick={optionClickHandler}>
          <div className="border-black border rounded-lg p-2 text-2xl">
            A. &nbsp; {questionSets[currentQuestion]?.optiona}
          </div>
        </div>

        <div className="" onClick={optionClickHandler}>
          <div className="border-black border rounded-lg p-2 text-2xl">
            B. &nbsp; {questionSets[currentQuestion]?.optionb}
          </div>
        </div>

        <div className="" onClick={optionClickHandler}>
          <div className="border-black border rounded-lg p-2 text-2xl">
            C. &nbsp; {questionSets[currentQuestion]?.optionc}
          </div>
        </div>

        <div className="" onClick={optionClickHandler}>
          <div className="border-black border rounded-lg p-2 text-2xl">
            D. &nbsp; {questionSets[currentQuestion]?.optiond}
          </div>
        </div>
      </div>

      <div className="w-full px-5">
        <button
          className="my-6  w-44 h-10 bg-emerald-500 rounded-md flex items-center justify-center text-xl font-bold text-white "
          onClick={submitHandler}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StudentQuestionItem;
