import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';

const StudentQuestionItem = ({questionSets }) => {
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
      optionElement.className = "option bg-white";
    });
  }, [currentQuestion]);

  const optionClickHandler = (event) => {
    event.target.className = "option bg-blue-400";
    setSelectedAnswer(event.target.innerText);

    // Get all of the option elements
    const optionElements = document.querySelectorAll(".option");

    // Set the class of the other option elements to "bg-white"
    optionElements.forEach((optionElement) => {
      if (optionElement !== event.target) {
        optionElement.className = "option bg-white";
      }
    });
  };

  return (
    <div>
      <div>
        Question {currentQuestion + 1} -{" "}
        {questionSets[currentQuestion]?.question}
      </div>
      <div className="option" onClick={optionClickHandler}>
        Option A - {questionSets[currentQuestion]?.optiona}
      </div>
      <div className="option" onClick={optionClickHandler}>
        Option B - {questionSets[currentQuestion]?.optionb}
      </div>
      <div className="option" onClick={optionClickHandler}>
        {" "}
        Option C - {questionSets[currentQuestion]?.optionc}
      </div>
      <div className="option" onClick={optionClickHandler}>
        Option D - {questionSets[currentQuestion]?.optiond}
      </div>

      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default StudentQuestionItem;
