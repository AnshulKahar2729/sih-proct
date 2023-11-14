import React, { useState } from "react";
import ProctorQuestionItem from "../components/ProctorQuestionItem";

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
    <div className="w-full " style={{ padding: "2% 12.5%",backgroundColor:"#D8DFF6" }}>
      <h1 className="text-4xl font-serif mb-7">Proctor Dashboard</h1>

      <div
        className="flex px-7 justify-between  text-lg  text-white"
      >
        <div className=" flex-wrap w-fit">
          <div
            className="flex gap-2 p-3 rounded-md mb-5 "
            style={{
              boxShadow: " 0px 3px 10px rgba(2, 1,, 0.1)",
              background: "#014da6",
            }}
          >
            <label>Name:</label>
            <input
              className="bg-slate-200  text-center text-black w-full placeholder:text-black"
              style={{
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(10px)",
                background: "white",
              }}
              type="text"
              name="examName"
              value={examName}
              placeholder="Exam Name"
            />
          </div>

          <div
            className="flex gap-2 p-3 rounded-md mb-5"
            style={{
              boxShadow: " 0px 3px 10px rgba(2, 1,, 0.1)",
              background: "#014da6",
            }}
          >
            <label>Date:</label>
            <input
              className="bg-slate-200  text-center text-black w-full"
              style={{
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(10px)",
                background: "white",
              }}
              type="date"
              name="date"
              value={examDate}
            />
          </div>

          <div
            className="flex gap-2 p-3 rounded-md mb-5"
            style={{
              boxShadow: " 0px 3px 10px rgba(2, 1,, 0.1)",
              background: "#014da6",
            }}
          >
            <label>Duration:</label>
            <input
              className="bg-slate-200  text-center text-black w-full"
              style={{
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(10px)",
                background: "white",
              }}
              type="time"
              name="duration"
              value={examDuration}
            />
          </div>

          <div
            className="flex gap-2 p-3 rounded-md mb-5"
            style={{
              boxShadow: " 0px 3px 10px rgba(2, 1,, 0.1)",
              background: "#014da6",
            }}
          >
            <label>Number of Questions : </label>
            <input
              className="bg-slate-200  text-center text-black w-full"
              style={{
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(10px)",
                background: "white",
              }}
              type="number"
              value={numberOfQuestions}
              onChange={(event) => {
                setNumberOfQuestions(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div
        className="w-full p-7 mt-5 "
      >
        {Array.from({ length: numberOfQuestions }).map((_, index) => (
          <ProctorQuestionItem index={index} key={index} dataPass={dataPass} />
        ))}
      <div className="w-full text-center text-white text-2xl">
        <button type="submit" 
          style={{
            background: "#014da6",
            padding:"4px",
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