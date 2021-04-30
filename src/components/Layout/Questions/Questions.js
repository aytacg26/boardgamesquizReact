import React, { Fragment, useContext } from 'react';
import gameContext from '../../../Context/GameContext/gameContext';
import QuestionWindow from '../QuestionWindow/QuestionWindow';

const Questions = () => {
  const {
    questions,
    numberOfQuestions,
    currentQuestion,
    playerPoints,
  } = useContext(gameContext);

  if (currentQuestion > 8) {
    console.log(playerPoints);
    return <div>Now we will generate statistics from user points</div>;
  }

  const question = questions.find((q) => q.q_id === currentQuestion);
  return (
    <Fragment>
      <QuestionWindow
        moveLeft={true}
        {...question}
        numberOfQuestions={numberOfQuestions}
      />
    </Fragment>
  );
};

export default Questions;
