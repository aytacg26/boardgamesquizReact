import { START_GAME, RESTART_GAME, SET_ERROR, NEXT_QUESTION } from '../Types';

const gameReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case START_GAME:
      return {
        ...state,
        ready: true,
        questions: payload,
        numberOfQuestions: payload?.length,
        error: null,
        isLoading: true,
      };

    case RESTART_GAME:
      return {
        ...state,
        ready: false,
        error: null,
        questions: [],
        currentQuestion: 1,
      };

    case NEXT_QUESTION:
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        playerPoints: [...state.playerPoints, payload],
      };

    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};

export default gameReducer;
