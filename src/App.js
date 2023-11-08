import { useState } from "react";
import "./App.css";
import ScoreBoard from "./components/ScoreBoard";
import Game from "./components/Game";
import History from "./components/History";
import Mission from "./components/Mission";
import GameLevel from "./components/GameLevel";

function App() {
  const [scoreDisplay, setScoreDisplay] = useState(0);

  return (
    <div className="App">
      <History />
      <div className="centerBoard">
        <GameLevel />
        <ScoreBoard score={scoreDisplay} />
        <Game score={scoreDisplay} setScore={setScoreDisplay} />
      </div>
      <Mission />
    </div>
  );
}

export default App;
