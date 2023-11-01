import React,{useState} from "react";


function ApiButton({ apiURL, onCLickFunction, initialtext, loadtext, finaltext }) {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(loadtext);

  const clickable = () => {
    setDisabled(true);
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDisabled(true);
        setLoading(finaltext);

        if (disabled) {
          console.log("Disabledddddd");
        }
      });
  };

  return (
    <div>
      <button
        className="text-white text-2xl bg-blue-600 w-80 h-10 hover:bg-blue-950 rounded-xl "
        onClick={() => {clickable(); onCLickFunction();}}
        disabled={disabled}
      >
        {!disabled ? initialtext : loading}
      </button>
    </div>
  );
}

export default ApiButton;
