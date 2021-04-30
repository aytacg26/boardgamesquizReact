import React, { useContext, useState, useEffect } from 'react';
import Button from '../../UI/Button/Button';
import classes from './Answers.module.css';
import Choices from './Choices';
import { useAnswer } from '../../../utils/CustomHooks/customHooks';
import gameContext from '../../../Context/GameContext/gameContext';
import {
  validateAnswer,
  icons,
  highLight,
  generateMessage,
} from '../../../utils/utils';
import ModalContext from '../../../Context/ModalContext/modalContext';

const Answers = ({ answers, qType, correctAnswer, points }) => {
  const [answer, setAnswer, setPlayerAnswer] = useAnswer([]); //update this one, this is not optimal solution!!
  const [playerName, setPlayerName] = useState('');
  const [disabled, setDisabled] = useState(false); //take this one to context

  const { nextQuestion, currentQuestion } = useContext(gameContext);
  const { handleModal } = useContext(ModalContext);

  useEffect(() => {
    if (answer.length > 0) {
      setPlayerName(localStorage.player);
      setPlayerAnswer([]);
      setDisabled(false);
    }

    //eslint-disable-next-line
  }, [currentQuestion]);

  //This function must be revised, it is not an optimal solution!!
  const handleSubmit = (e) => {
    e.preventDefault();

    if (answer.length > 0) {
      const isCorrect = validateAnswer(answer, correctAnswer);
      // setDisabled(true);
      const playerPoint = {
        point: isCorrect ? points : 0,
        currentQuestion,
      };
      const highlightAnswers = Array.isArray(correctAnswer)
        ? correctAnswer
        : [correctAnswer];

      if (isCorrect) {
        const message = generateMessage(playerName, true);

        handleModal('Correct!', message, 'success', icons.success);

        highLight(highlightAnswers, 'correct');
      } else {
        const message = generateMessage(playerName, false);
        handleModal('Wrong!', message, 'danger', icons.wrong);
        highLight(highlightAnswers, 'correct');
        highLight(answer, 'wrong');
      }

      //This creates problem at the end of last question
      const toNext = setTimeout(() => {
        nextQuestion(playerPoint);
        clearTimeout(toNext);
      }, 4000);
    } else {
      handleModal(
        'No Answer',
        'Please select an answer, no answer selected',
        'danger',
        icons.error
      );
    }
  };

  return (
    <form
      className={
        !disabled
          ? classes['possible-answers']
          : `${classes['possible-answers']} ${classes.disabled}`
      }
      onSubmit={handleSubmit}
    >
      <Choices answers={answers} qType={qType} onChange={setAnswer} />
      <div className={classes['next-question-button']}>
        <Button btnType='success' className={classes['answer-button']}>
          Next
        </Button>
      </div>
    </form>
  );
};

export default Answers;
