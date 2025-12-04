import React from "react";
import "./GameNav.css";

export default function GameNav({ activeGame, setActiveGame }) {
  return (
    <nav className="game-nav">
      <button
        className={activeGame === "truefalse" ? "active" : ""}
        onClick={() => setActiveGame("truefalse")}
      >
        True / False
      </button>
    </nav>
  );
}
