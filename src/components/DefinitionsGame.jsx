import React, { useState } from "react";
import definitions from "../data/definitions";
import "./MatchingGame.css";

export default function DefinitionsGame() {
  const [answers, setAnswers] = useState({});

  // keep one shuffle until you explicitly reset
  const [shuffledDefinitions, setShuffledDefinitions] = useState(() =>
    [...definitions].sort(() => Math.random() - 0.5)
  );

  const handleChange = (e, index) => {
    const value = e.target.value;
    setAnswers({ ...answers, [index]: value });
  };

  const checkStatus = (definitionItem, userValue) => {
    if (!userValue) return "answer-box";
    if (definitionItem.correct === Number(userValue)) return "correct-box";
    return "wrong-box";
  };

  const handleReset = () => {
    setAnswers({});
    // reshuffle when you hit Reset
    setShuffledDefinitions(
      [...definitions].sort(() => Math.random() - 0.5)
    );
  };

  return (
    <div className="matching-wrapper">
      <h2>React Definitions Matching</h2>

      <div className="matching-grid">
        {/* LEFT COLUMN — TERMS */}
        <div className="left-column">
          <h3>Terms</h3>
          {definitions.map((item, i) => (
            <p className="term-item" key={i}>
              {i + 1}. {item.term}
            </p>
          ))}
        </div>

        {/* RIGHT COLUMN — DEFINITIONS */}

        <div className="right-column">
          <h3>Definitions</h3>

          {/* ORIGINAL (UNSHUFFLED) VERSION – 
          {definitions.map((item, i) => (
            <div className="match-item" key={i}>
              <input
                type="text"
                maxLength="2"
                value={answers[i] || ""}
                className={
                  answers[i] && definitions[i].correct === Number(answers[i])
                    ? "correct-box"
                    : "answer-box"
                }
                onChange={(e) => handleChange(e, i)}
              />
              {item.definition}
            </div>
          ))}
          */}

          {/* NEW SHUFFLED VERSION (rows no longer jump) */}
          {shuffledDefinitions.map((item, i) => (
            <div className="match-item" key={i}>
              <input
                type="text"
                maxLength="2"
                value={answers[i] || ""}
                className={checkStatus(item, answers[i])}
                onChange={(e) => handleChange(e, i)}
              />
              {item.definition}
            </div>
          ))}
        </div>
      </div>

      {/* RESET BUTTON BELOW GRID */}
      <button className="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
