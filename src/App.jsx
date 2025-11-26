import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import GameNav from "./components/GameNav.jsx";
import DefinitionsGame from "./components/DefinitionsGame.jsx";
import SnippetsGame from "./components/SnippetsGame.jsx";
import TrueFalseGame from "./components/TrueFalseGame.jsx";
import "./index.css";

function App() {
  const [activeGame, setActiveGame] = useState("definitions");

  return (
    <div className="app-container">
      <Header />

      <GameNav activeGame={activeGame} setActiveGame={setActiveGame} />

      <main className="game-container">
        {activeGame === "definitions" && <DefinitionsGame />}
        {activeGame === "snippets" && <SnippetsGame />}
        {activeGame === "truefalse" && <TrueFalseGame />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
