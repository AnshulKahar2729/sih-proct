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
      className="flex flex-col gap-7 mb-8 shadow-md shadow-black/50"
      style={{
        borderRadius: " 1rem",
        backgroundColor: "white",
        padding: "1.5rem",
      }}
    >
      <div className="w-full flex flex-col " style={{ color: "#014da6" }}>
        <span
          className="p-1 rounded-lg w-fit font-bold text-2xl"
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            background: " rgb(255, 255, 255, 0.3)",
          }}
        >
          QUESTION {index + 1}
          {" : "}
        </span>
        <br />
        <div className=" flex px-2 placeholder-white">
          <div className="optionHolder px-2 rounded-l-md items-center flex text-white">
            Question
          </div>
          <input
            style={{ border: "1px solid gray" }}
            className="w-2/3 px-2 rounded-r-md"
            placeholder="Enter your Question"
            onChange={(event) => {
              setQuestion(event.target.value);
              handleInputChange(event, "question");
            }}
            value={question}
            type="text"
          />

        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className=" flex px-2 placeholder-white">
          <div className="optionHolder px-2 rounded-l-md items-center flex text-white">
            Option A
          </div>
          <input
            style={{ border: "1px solid gray" }}
            className="w-2/3 px-2 rounded-r-md"
            placeholder="Type here"
            onChange={(event) => {
              setOptionA(event.target.value);
              handleInputChange(event, "optiona");
            }}
            type="text"
            value={optionA}
          />
        </div>
        <div className=" flex px-2 placeholder-white">
          <div className="optionHolder px-2 rounded-l-md items-center flex text-white">
            Option B
          </div>
          <input
            style={{ border: "1px solid gray" }}
            className="w-2/3 px-2 rounded-r-md"
            placeholder="Type here"
            onChange={(event) => {
              setOptionB(event.target.value);
              handleInputChange(event, "optionb");
            }}
            type="text"
            value={optionB}
          />
        </div>
        <div className=" flex px-2 placeholder-white">
          <div className="optionHolder px-2 rounded-l-md items-center flex text-white">
            Option C
          </div>
          <input
            style={{ border: "1px solid gray" }}
            className="w-2/3 px-2 rounded-r-md"
            placeholder="Type here"
            onChange={(event) => {
              setOptionC(event.target.value);
              handleInputChange(event, "optionc");
            }}
            type="text"
            value={optionC}
          />
        </div>
        <div className=" flex px-2 placeholder-white">
          <div className="optionHolder px-2 rounded-l-md items-center flex text-white">
            Option D
          </div>
          <input
            style={{ border: "1px solid gray" }}
            className="w-2/3 px-2 rounded-r-md"
            placeholder="Type here"
            onChange={(event) => {
              setOptionD(event.target.value);
              handleInputChange(event, "optiond");
            }}
            type="text"
            value={optionD}
          />
        </div>
      </div>

      <div className=" flex px-2 placeholder-white">
        <div className="optionHolder px-2 rounded-l-md items-center flex text-white">
          Correct Answer
        </div>
        <select
          style={{ border: "1px solid gray" }}
          value={correctAnswer}
          className="border-black rounded-r-lg text-slate-600"
          onChange={(event) => {
            setCorrectAnswer(event.target.value);
            handleInputChange(event, "correctAnswer");
          }}
        >
          <option value="optionA">Option A</option>
          <option value="optionB">Option B</option>
          <option value="optionC">Option C</option>
          <option value="optionD">Option D</option>
        </select>
      </div>
    </form>
  );
};

export default ProctorQuestionItem;
