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
} from "../actions/actionType";

const initialState = {
  score: 0,
  missionMoves: 15,
  movesLeft: 15,
  missionGoal: 15,
  candiesLeft: 15,
  gameLevel: 1,
  gamesWon: 0,
  gamesLost: 0,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCORE:
      return {
        ...state,
        score: state.score + action.payload,
      };

    case MOVESLEFT:
      return {
        ...state,
        movesLeft: state.movesLeft - 1,
      };

    case CANDIESLEFT:
      return {
        ...state,
        candiesLeft: state.candiesLeft - action.payload,
      };
    case GOAL:
      return {
        ...state,
        missionGoal: state.missionGoal + action.payload,
        candiesLeft: state.missionGoal + action.payload,
      };
    case RESET:
      return initialState;

    case VALIDCANDIES:
      return {
        ...state,
        candiesLeft: 0,
      };

    case VALIDMOVES:
      return {
        ...state,
        movesLeft: 0,
      };
    case WON:
      return {
        ...state,
        gamesWon: state.gamesWon + 1,
      };
    case LOST:
      return {
        ...state,
        gamesLost: state.gamesLost + 1,
      };
    case LEVELUP:
      return {
        ...state,
        gameLevel: state.gameLevel + 1,
      };
    case NEXT:
      return {
        ...state,
        missionMoves: state.missionMoves - 1,
        movesLeft: state.missionMoves - 1,
      };
    case RETRY:
      return {
        ...state,
        movesLeft: state.missionMoves,
        candiesLeft: state.missionGoal,
      };

    default:
      return state;
  }
};

export default gameReducer;
