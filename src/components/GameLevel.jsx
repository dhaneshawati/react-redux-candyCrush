import React from "react";
import { useSelector } from "react-redux";

function GameLevel() {
  const level = useSelector((state) => state.gameLevel);
  return (
    <div className="gameLevel">
      <h2> Level : {level}</h2>
    </div>
  );
}

export default GameLevel;
