import { useState, useRef, useEffect, useContext } from 'react';
import modalContext from '../../Context/ModalContext/modalContext';
import gameContext from '../../Context/GameContext/gameContext';
import { isValidName } from '../utils';
import { icons } from '../utils';

export const useAnswer = (init) => {
  const [answer, setPlayerAnswer] = useState(init);

  const setAnswer = (e) => {
    const { type, value, checked } = e.target;

    switch (type) {
      case 'radio':
        setPlayerAnswer([value]);
        break;

      case 'checkbox':
        if (checked) {
          setPlayerAnswer((prevState) => [...prevState, value]);
        } else {
          setPlayerAnswer((prevState) => {
            return prevState.filter((val) => val !== value);
          });
        }
        break;
      default:
        setPlayerAnswer([]);
    }
  };

  return [answer, setAnswer, setPlayerAnswer];
};

export const useName = (initName) => {
  const [name, setName] = useState(initName);
  const inputRef = useRef();
  const { handleModal } = useContext(modalContext);
  const { startGame, error } = useContext(gameContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { hasSpecialChars, hasValidLength } = isValidName(name, 20);

    if (name.trim().length > 0 && !hasSpecialChars && hasValidLength) {
      setIsLoading(true);
      startGame();
      if (!error) {
        localStorage.setItem('player', name);
      } else {
        handleModal(
          'Server Error',
          'An unexpected server error occured.',
          'danger',
          icons.error
        );
      }
    } else {
      if (!hasValidLength) {
        handleModal(
          'Too Long',
          'Name or nickname must be at most 20 characters',
          'danger',
          icons.error
        );
      } else if (hasSpecialChars) {
        handleModal(
          'No Special Character',
          'Please do not use special characters (£, $, €, <, >, @, [, ], !, ?, =) in your name',
          'danger',
          icons.error
        );
        setName('');
        inputRef.current.focus();
      } else if (name.trim.length === 0) {
        handleModal(
          'Name Please',
          'We will be happy to know your name. Please enter your name or at least a nickname',
          'danger',
          icons.error
        );
      }
    }
  };

  return { name, inputRef, isLoading, handleChange, handleSubmit };
};

export const useCounter = (initCount) => {
  const [counter, setCounter] = useState(initCount);
  const [playerName, setPlayerName] = useState('');
  const [start, setStart] = useState(false);
  const [showCounter, setShowCounter] = useState(false);

  useEffect(() => {
    const name = localStorage.player;

    if (name) {
      setPlayerName(name);
      document.title = `${name} | Board Games Quiz`;
    } else {
      setPlayerName('Player');
    }
  }, []);

  useEffect(() => {
    const starter = setTimeout(() => {
      setStart(true);
      setShowCounter(true);
    }, 1000);

    return () => {
      clearTimeout(starter);
    };
  }, []);

  useEffect(() => {
    let timer;

    if (start && counter > 0) {
      timer = setInterval(() => {
        setCounter((prevCount) => prevCount - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [counter, start]);

  return [playerName, counter, showCounter];
};
