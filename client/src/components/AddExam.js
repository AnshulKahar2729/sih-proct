import React, { useState } from "react";
import QuestionItem from "./QuestionItem";

const AddExam = () => {
  const [questionSet, setQuestionSet] = useState([
    {
      question: "",
      optiona: "",
      optionb: "",
      optionc: "",
      optiond: "",
      correctAnswer: "",
    },
  ]);

  const [examName, setExamName] = useState();
  const [examDate, setExamDate] = useState();
  const [examDuration, setExamDuration] = useState();

  const [numberOfQuestions, setNumberOfQuestions] = useState(5);

  const dataPass = (value, index, type) => {
    const newQuestionSet = [...questionSet]; // copy the array
    if (type === "question") {
      newQuestionSet[index] = { ...newQuestionSet[index], question: value };
    } else if (type === "optiona") {
      newQuestionSet[index] = { ...newQuestionSet[index], optiona: value };
    } else if (type === "optionb") {
      newQuestionSet[index] = { ...newQuestionSet[index], optionb: value };
    } else if (type === "optionc") {
      newQuestionSet[index] = { ...newQuestionSet[index], optionc: value };
    } else if (type === "optiond") {
      newQuestionSet[index] = { ...newQuestionSet[index], optiond: value };
    } else if (type === "correctAnswer") {
      newQuestionSet[index] = {
        ...newQuestionSet[index],
        correctAnswer: value,
      };
    }
    setQuestionSet(newQuestionSet);
  };

  const saveBtn = (e) => {
    e.preventDefault();
    console.log(questionSet);
  }


  return (
    <div className="w-full" style={{ padding: "2% 12.5%" }}>
      <h1 className="text-4xl font-serif mb-7">Proctor Dashboard</h1>

      <div
        className="flex p-5 justify-between bg-blue-400 text-lg  text-white"
        style={{
          borderRadius: " 10px",
          boxShadow: " 0px 3px 10px rgba(2, 1,, 0.1)",
          backdropFilter: "blur(19.6px)",
          webkitBackdropFilter: " blur(19.6px)",
          border: " 8px ridge ",
        }}
      >
        <div className=" flex-wrap w-fit">
          <div
            className="flex gap-2 p-3 rounded-xl mb-5"
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderRadius: " 1rem",
              background: " rgb(255, 255, 255, 0.3)",
            }}
          >
            <label>Name:</label>
            <input
              className="bg-slate-200  text-center text-black w-full"
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                background: " rgb(255, 255, 255, 0.3)",
              }}
              type="text"
              name="examName"
              value={examName}
              placeholder="Exam Name"
            />
          </div>

          <div
            className="flex gap-2 p-3 rounded-xl mb-5"
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderRadius: " 1rem",
              background: " rgb(255, 255, 255, 0.3)",
            }}
          >
            <label>Date:</label>
            <input
              className="bg-slate-200 text-center text-black w-full"
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                background: " rgb(255, 255, 255, 0.3)",
              }}
              type="date"
              name="date"
              value={examDate}
            />
          </div>

          <div
            className="flex gap-2 p-3 rounded-xl mb-5"
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderRadius: " 1rem",
              background: " rgb(255, 255, 255, 0.3)",
            }}
          >
            <label>Duration:</label>
            <input
              className="bg-slate-200 text-center text-black w-full"
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                background: " rgb(255, 255, 255, 0.3)",
              }}
              type="time"
              name="duration"
              value={examDuration}
            />
          </div>

          <div
            className="flex gap-2 p-3 rounded-xl mb-5"
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderRadius: " 1rem",
              background: " rgb(255, 255, 255, 0.3)",
            }}
          >
            <label>Number of Questions : </label>
            <input
              className="bg-slate-200 text-center text-black w-full"
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                background: " rgb(255, 255, 255, 0.3)",
              }}
              type="number"
              value={numberOfQuestions}
              onChange={(event) => {
                setNumberOfQuestions(event.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <img src="https://o.remove.bg/downloads/27b3d60f-cf29-4a9d-a56f-b19823f687cd/image-removebg-preview.png" alt="image"/>
        </div>
      </div>
      <div
        className="w-full p-7 bg-blue-400 mt-5 "
        style={{ border: "10px ridge black", borderRadius: "10px" }}
      >
        {Array.from({ length: numberOfQuestions }).map((_, index) => (
          <ProctorQuestionItem index={index} key={index} dataPass={dataPass} />
        ))}
      <div className="w-full text-center">
        <button type="submit" 
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            background: " rgb(255, 255, 255, 0.3)",
            padding:"2px",
            width:"150px",
            borderRadius: " 0.4rem",
          }}
          onClick={(e) => saveBtn(e)}
          >Save</button>
      </div>
      </div>
    </div>
  );
};

export default AddExam;