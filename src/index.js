import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ModalState from './Context/ModalContext/ModalState';
import GameInitState from './Context/GameContext/GameState';

ReactDOM.render(
  <React.StrictMode>
    <GameInitState>
      <ModalState>
        <App />
      </ModalState>
    </GameInitState>
  </React.StrictMode>,
  document.getElementById('root')
);
