import { useReducer } from 'react';
import modalReducer from './modalReducer';
import ModalContext from './modalContext';
import { SET_ALERT, REMOVE_ALERT } from '../Types';

const ModalState = (props) => {
  const initialState = {
    showModal: false,
    title: '',
    message: '',
    type: '',
    icon: '',
  };

  const [state, dispatch] = useReducer(modalReducer, initialState);

  const handleModal = (title, message, type, icon) => {
    dispatch({ type: SET_ALERT, payload: { title, message, type, icon } });

    const timer = setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
      clearTimeout(timer);
    }, 4000);
  };

  return (
    <ModalContext.Provider
      value={{
        showModal: state.showModal,
        title: state.title,
        message: state.message,
        type: state.type,
        icon: state.icon,
        handleModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalState;
