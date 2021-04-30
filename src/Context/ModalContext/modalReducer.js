import { SET_ALERT, REMOVE_ALERT } from '../Types';

const ModalReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return {
        ...state,
        showModal: true,
        title: payload.title,
        message: payload.message,
        type: payload.type,
        icon: payload.icon,
      };

    case REMOVE_ALERT:
      return {
        ...state,
        showModal: false,
        title: '',
        message: '',
        type: '',
        icon: '',
      };

    default:
      return state;
  }
};

export default ModalReducer;
