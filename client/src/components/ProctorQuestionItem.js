import React, { useState } from "react";

const ProctorQuestionItem = ({ dataPass, index }) => {
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleInputChange = (event, type) => {
    dataPass(event.target.value, index, type);
  };

  return (
    <form 
          className=" p-4 flex flex-col gap-1.5 mb-8" 
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderRadius:" 1rem",
            background:" rgb(255, 255, 255, 0.3)",
            padding: "1.5rem",
          }}>
      <div className="w-full flex flex-col ">
        <span className="p-1 rounded-lg w-fit" 
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            background:" rgb(255, 255, 255, 0.3)",
          }}
          >QUESTION {index + 1}{" : "}</span>
        <br/>
        <input
          className="w-full rounded-lg px-2"
          placeholder="Enter your Question"
          onChange={(event) => {
            setQuestion(event.target.value);
            handleInputChange(event, "question");
          }}
          value={question}
          type="text"
        />
      </div>

      <div className="flex flex-col gap-1">
        <input
          className="w-full rounded-lg px-2"
          placeholder="Option A"
          onChange={(event) => {
            setOptionA(event.target.value);
            handleInputChange(event, "optiona");
          }}
          type="text"
          value={optionA}
        />

        <input
          className="w-full rounded-lg px-2"
          placeholder="Option B"
          onChange={(event) => {
            setOptionB(event.target.value);
            handleInputChange(event, "optionb");
          }}
          type="text"
          value={optionB}
        />
        <input
          className="w-full rounded-lg px-2"
          placeholder="Option C"
          onChange={(event) => {
            setOptionC(event.target.value);
            handleInputChange(event, "optionc");
          }}
          type="text"
          value={optionC}
        />
        <input
          className="w-full rounded-lg px-2"
          placeholder="Option D"
          onChange={(event) => {
            setOptionD(event.target.value);
            handleInputChange(event, "optiond");
          }}
          type="text"
          value={optionD}
        />
      </div>

      <div>
        <input
          className="w-full rounded-lg px-2"
          placeholder="Correct Answer"
          onChange={(event) => {
            setCorrectAnswer(event.target.value);
            handleInputChange(event, "correctAnswer");
          }}
          type="text"
          value={correctAnswer}
        />
      </div>
    </form>
  );
};

export default ProctorQuestionItem;