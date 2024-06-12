import { useState } from "react";

const messages = [
  "Learn HTML",
  "Learn CSS",
  "Learn Bootstrap",
  "Learn JavaScript",
  "Learn JQuery",
  "Learn React.js",
  "Learn Node.js",
  "Learn Express.js",
  "Learn MongoDB",
  "MERN Completed"
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 10) setStep(step + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          {/* numbers */}
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
            <div className={`${step >= 4 ? "active" : ""}`}>4</div>
            <div className={`${step >= 5 ? "active" : ""}`}>5</div>
            <div className={`${step >= 6 ? "active" : ""}`}>6</div>
            <div className={`${step >= 7 ? "active" : ""}`}>7</div>
            <div className={`${step >= 8 ? "active" : ""}`}>8</div>
            <div className={`${step >= 9 ? "active" : ""}`}>9</div>
            <div className={`${step >= 10 ? "active" : ""}`}>10</div>
          </div>
          {/* message */}
          <p className="message">
            step {step} : {messages[step - 1]}
          </p>
          {/* buttons */}
          <div className="buttons">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}
