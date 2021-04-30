import React from 'react';
import Answers from './Answers';
import classes from './QuestionWindow.module.css';

const QuestionWindow = ({
  title,
  q_id,
  numberOfQuestions,
  moveLeft,
  img,
  possible_answers,
  question_type,
  correct_answer,
  points,
}) => {
  const windowClass = moveLeft
    ? `${classes['window-transition']} ${classes['move-left']}`
    : classes['window-transition'];

  return (
    <div className={windowClass}>
      <div className={classes['question-title']}>
        <div className={classes['numsSection']}>
          <span className={classes['question-no']}>Question No {q_id}</span>
          <span className={classes['num-questions']}>
            {q_id} / {numberOfQuestions}
          </span>
        </div>
        <p className={classes.question}>{title}</p>
      </div>
      <div className={classes['question-image']}>
        <img src={img} alt={title} title={title} />
      </div>
      <Answers
        answers={possible_answers}
        qType={question_type}
        correctAnswer={correct_answer}
        points={points}
      />
    </div>
  );
};

export default QuestionWindow;
