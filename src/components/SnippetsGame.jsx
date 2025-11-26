import React, { useState } from "react";
import snippets from "../data/snippets";
import "./MatchingGame.css";

export default function SnippetsGame() {
  const [answers, setAnswers] = useState({});

  // Keep the shuffled descriptions stable until reset
  const [shuffledSnippets, setShuffledSnippets] = useState(() =>
    [...snippets].sort(() => Math.random() - 0.5)
  );

  const handleChange = (e, index) => {
    const value = e.target.value;
    setAnswers({ ...answers, [index]: value });
  };

  // Determine correct/wrong/blank
  const checkStatus = (item, userValue) => {
    if (!userValue) return "answer-box";
    if (item.correct === Number(userValue)) return "correct-box";
    return "wrong-box";
  };

  const handleReset = () => {
    setAnswers({});
    setShuffledSnippets(
      [...snippets].sort(() => Math.random() - 0.5)
    );
  };

  return (
    <div className="matching-wrapper">
      <h2>React Code Snippet Matching</h2>

      <div className="matching-grid">

        {/* LEFT COLUMN — WITH NUMBERS */}
        <div className="left-column">
          <h3>Code</h3>

          {/*
             Original (unshuffled) code — commented for reference
            {snippets.map((item, i) => (
              <pre className="code-block" key={i}>
                {item.snippet}
              </pre>
            ))}
          */}

          {/*  New version — numbered code snippets */}
          {snippets.map((item, i) => (
            <pre className="code-block" key={i}>
              <strong>{i + 1}.</strong> {item.snippet}
            </pre>
          ))}
        </div>

        {/* RIGHT COLUMN — SHUFFLED DESCRIPTIONS */}
        <div className="right-column">
          <h3>Description</h3>

          {/*
             Original unshuffled descriptions:
            {snippets.map((item, i) => (
              <div className="match-item" key={i}>
                <input
                  className={answers[i] && isCorrect(i, answers[i]) 
                    ? "correct-box" 
                    : "answer-box"}
                  type="text"
                  maxLength="2"
                  onChange={(e) => handleChange(e, i)}
                />
                {item.answer}
              </div>
            ))}
          */}

          {/*  NEW SHUFFLED VERSION */}
          {shuffledSnippets.map((item, i) => (
            <div className="match-item" key={i}>
              <input
                type="text"
                maxLength="2"
                value={answers[i] || ""}
                className={checkStatus(item, answers[i])}
                onChange={(e) => handleChange(e, i)}
              />
              {item.answer}
            </div>
          ))}
        </div>

      </div>

      {/* RESET BUTTON */}
      <button className="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
