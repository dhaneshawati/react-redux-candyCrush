import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import blueCandy from "../Assets/blue-candy.jpeg";

import {
  levelCleared,
  levelFailed,
  nextLevel,
  showValidCandies,
  showValidMoves,
  updateGoal,
} from "../redux/actions/actionCreator";
import GameWonModal from "./GameWonModal";
import Burst from "./Burst";

function Mission() {
  const [openModal, setOpenModal] = useState(false);
  const maxMoves = useSelector((state) => state.movesLeft);
  const candiesRemaining = useSelector((state) => state.candiesLeft);
  const candyGoal = useSelector((state) => state.missionGoal);

  const dispatch = useDispatch();

  useEffect(() => {
    if (candiesRemaining < 0) {
      dispatch(showValidCandies());
    }

    if (maxMoves >= 0 && candiesRemaining <= 0) {
      setOpenModal(true);
      //   dispatch(updateGoal(5));
      //   dispatch(levelCleared());
      //   dispatch(nextLevel());
    }
    if (maxMoves <= 0) {
      dispatch(showValidMoves());
      //   dispatch(levelFailed());
    }
  }, [candiesRemaining, maxMoves]);

  return (
    <div className="mission">
      <h4>{`Collect ${candyGoal} blue candies`}</h4>
      <div className="targetCount">
        <img src={blueCandy} alt="blueCandy" />
        <p>{`remaining : ${candiesRemaining}`}</p>
      </div>
      <div className="movesLeft">Moves Left : {maxMoves}</div>
      <Burst cleared={openModal} />
      <GameWonModal open={openModal} setOpen={setOpenModal} />
    </div>
  );
}

export default Mission;
