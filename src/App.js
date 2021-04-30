import { useContext, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import classes from './App.module.css';
import Header from './components/Layout/Header/Header';
import GameInit from './components/Layout/GameInit/GameInit';
import modalContext from './Context/ModalContext/modalContext';
import Loader from './components/UI/Loader/Loader';
const Modal = lazy(() => import('./components/UI/Modal/Modal'));

const App = () => {
  const { showModal, title, message, type, icon } = useContext(modalContext);

  return (
    <Router>
      <Header title1='Classic Board' title2='Games Quiz' />
      <div className={classes.container}>
        <Route path='/' component={GameInit} />
      </div>
      <Suspense fallback={<Loader />}>
        <Modal
          type={type}
          show={showModal}
          title={title}
          icon={icon}
          message={message}
        />
      </Suspense>
    </Router>
  );
};

export default App;
