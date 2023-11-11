import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CountdownTimer = ({ examDuration }) => {
  const [timeRemaining, setTimeRemaining] = useState(examDuration);
  const navigate = useNavigate();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(countdownInterval);
  }, [timeRemaining]);

  if (timeRemaining === 0) {
    console.log("Time's up!");
    navigate("/result");
  }

  return (
    <span>

      {timeRemaining === 0 ? (
        <span>Countdown complete!</span>
      ) : (
        <span>Time remaining: {parseInt(timeRemaining / 60)} minutes</span>
      )}
    </span>
  );
};

export default CountdownTimer;
