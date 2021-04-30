import { lazy, Suspense } from 'react';
import { useCounter } from '../../../utils/CustomHooks/customHooks';
import classes from './CountDown.module.css';
import PropTypes from 'prop-types';
import Loader from '../../UI/Loader/Loader';

const Questions = lazy(() => import('../Questions/Questions'));

const CountDown = ({ countDown, greeting, description, question }) => {
  const [playerName, counter, showCounter] = useCounter(countDown);

  if (counter === 0) {
    return (
      <Suspense fallback={<Loader />}>
        <Questions />
      </Suspense>
    );
  }

  return (
    <div className={classes.CountDownContainer}>
      <div className={classes.Player}>
        {greeting}, {playerName}
      </div>
      <div className={classes.Question}>{question}</div>
      <div className={classes.Description}>{description}</div>
      <div className={classes.Counter}>{showCounter && counter}</div>
    </div>
  );
};

CountDown.defaultProps = {
  countDown: 3,
  greeting: 'Hi',
  description: `Get ready to roll the dice and prove your prowess with this fun quiz on
  classic board games!`,
  question: `Are you a board game boss?`,
};

CountDown.propTypes = {
  countDown: PropTypes.number,
  greeting: PropTypes.string,
  description: PropTypes.string,
};

export default CountDown;
