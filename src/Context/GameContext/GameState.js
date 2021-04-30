import { useReducer } from 'react';
import gameReducer from './gameReducer';
import GameContext from './gameContext';

import { RESTART_GAME, SET_ERROR, START_GAME, NEXT_QUESTION } from '../Types';
import axios from 'axios';

const GameState = (props) => {
  const initialState = {
    ready: false,
    questions: [],
    numberOfQuestions: 0,
    currentQuestion: 1,
    error: null,
    isLoading: false,
    playerPoints: [],
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);

  const startGame = async () => {
    try {
      const res = await axios.get(
        'https://proto.io/en/jobs/candidate-exercise/quiz.json'
      );

      if (res.status === 200) {
        dispatch({ type: START_GAME, payload: res.data.questions });
      }
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
    }
  };

  const nextQuestion = (playerPoint) => {
    dispatch({ type: NEXT_QUESTION, payload: playerPoint });
  };

  const restartGame = () => {
    dispatch({ type: RESTART_GAME });
  };

  return (
    <GameContext.Provider
      value={{
        ready: state.ready,
        questions: state.questions,
        error: state.error,
        numberOfQuestions: state.numberOfQuestions,
        currentQuestion: state.currentQuestion,
        playerPoints: state.playerPoints,
        answerResults: state.answerResults,
        isLoading: state.isLoading,
        startGame,
        restartGame,
        nextQuestion,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
