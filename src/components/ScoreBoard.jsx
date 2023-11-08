import React from "react";
import { useSelector } from "react-redux";

function ScoreBoard() {
  const score = useSelector((state) => state.score);
  return (
    <div className="scoreboard">
      <h2>Score : {score}</h2>
    </div>
  );
}

export default ScoreBoard;
