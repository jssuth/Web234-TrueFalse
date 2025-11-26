import React from "react";
import "./GameNav.css";

export default function GameNav({ activeGame, setActiveGame }) {
  return (
    <nav className="game-nav">
      <button
        className={activeGame === "definitions" ? "active" : ""}
        onClick={() => setActiveGame("definitions")}
      >
        Definitions
      </button>

      <button
        className={activeGame === "snippets" ? "active" : ""}
        onClick={() => setActiveGame("snippets")}
      >
        Code Snippets
      </button>

      <button
        className={activeGame === "truefalse" ? "active" : ""}
        onClick={() => setActiveGame("truefalse")}
      >
        True / False
      </button>
    </nav>
  );
}
