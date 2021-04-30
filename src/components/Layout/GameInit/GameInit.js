import React, { Fragment, lazy, Suspense, useContext } from 'react';
import gameContext from '../../../Context/GameContext/gameContext';
import Loader from '../../UI/Loader/Loader';
import EntryForm from '../EntryForm/EntryForm';

const CountDown = lazy(() => import('../CountDown/CountDown'));

const GameInit = () => {
  const { ready } = useContext(gameContext);

  return (
    <Fragment>
      {!ready && <EntryForm />}
      {ready && (
        <Suspense fallback={<Loader />}>
          <CountDown />
        </Suspense>
      )}
    </Fragment>
  );
};

export default GameInit;
