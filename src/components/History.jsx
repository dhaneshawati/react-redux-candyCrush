import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GameLostWModal from "./GameLostModal";
// import GameWonModal from "./GameWonModal";

function History() {
  const wonGames = useSelector((state) => state.gamesWon);
  const lostGames = useSelector((state) => state.gamesLost);
  const movesRemaining = useSelector((state) => state.movesLeft);
  const [openLostModal, setOpenLostModal] = useState(false);

  useEffect(() => {
    if (movesRemaining <= 0) {
      setOpenLostModal(true);
    }
  }, [movesRemaining]);

  return (
    <div className="history">
      <h3>Total Games Won : {wonGames}</h3>
      <h3>Total Games Lost : {lostGames}</h3>
      <GameLostWModal open={openLostModal} setOpen={setOpenLostModal} />
    </div>
  );
}

export default History;
