import "./App.css";
import ScoreBoard from "./components/ScoreBoard";
import Game from "./components/Game";
import History from "./components/History";
import Mission from "./components/Mission";
import GameLevel from "./components/GameLevel";

function App() {
  return (
    <div className="App">
      <History />
      <div className="centerBoard">
        <GameLevel />
        <ScoreBoard />
        <Game />
      </div>
      <Mission />
    </div>
  );
}

export default App;
