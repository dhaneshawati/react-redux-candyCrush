import {
  CANDIESLEFT,
  GOAL,
  LEVELUP,
  LOST,
  MOVESLEFT,
  NEXT,
  RESET,
  RETRY,
  SCORE,
  VALIDCANDIES,
  VALIDMOVES,
  WON,
} from "./actionType";

export const updateScore = (value) => {
  return {
    type: SCORE,
    payload: value,
  };
};

export const decreaseMoves = () => {
  return {
    type: MOVESLEFT,
  };
};

export const resetLevel = () => {
  return {
    type: RESET,
  };
};

export const decreaseCandies = (burstedCandies) => {
  return {
    type: CANDIESLEFT,
    payload: burstedCandies,
  };
};

export const updateGoal = (goalValue) => {
  return {
    type: GOAL,
    payload: goalValue,
  };
};

export const showValidCandies = () => {
  return {
    type: VALIDCANDIES,
  };
};

export const showValidMoves = () => {
  return {
    type: VALIDMOVES,
  };
};
export const levelSuccess = () => {
  return {
    type: WON,
  };
};
export const levelFailed = () => {
  return {
    type: LOST,
  };
};
export const nextLevel = () => {
  return {
    type: LEVELUP,
  };
};

export const updateMoves = () => {
  return {
    type: NEXT,
  };
};

export const levelRetry = () => {
  return {
    type: RETRY,
  };
};
