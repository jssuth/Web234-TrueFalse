import React, { useState } from "react";
import truefalse from "../data/truefalse";
import "./TrueFalse.css";

export default function TrueFalseGame() {
  const [selected, setSelected] = useState({});

  const handleAnswer = (index, value) => {
    setSelected({ ...selected, [index]: value });
  };

  return (
    <div className="tf-wrapper">
      <h2>React True / False Quiz</h2>

      {truefalse.map((q, i) => {
        const userAnswer = selected[i];
        const correct = q.answer;

        const trueClass =
          userAnswer === true
            ? userAnswer === correct
              ? "tf-btn correct"
              : "tf-btn wrong"
            : "tf-btn";

        const falseClass =
          userAnswer === false
            ? userAnswer === correct
              ? "tf-btn correct"
              : "tf-btn wrong"
            : "tf-btn";

        return (
          <div className="tf-item" key={i}>
            <p className="tf-question">{q.statement}</p>

            <button
              onClick={() => handleAnswer(i, true)}
              className={trueClass}
            >
              True
            </button>

            <button
              onClick={() => handleAnswer(i, false)}
              className={falseClass}
            >
              False
            </button>
          </div>
        );
      })}

      <button className="reset-btn" onClick={() => setSelected({})}>
        Reset Quiz
      </button>
    </div>
  );
}
