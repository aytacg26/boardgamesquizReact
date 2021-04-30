import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';

import ModalOverlay from './ModalOverlay';
import Backdrop from './Backdrop';

const Modal = ({ type, show, message, title, icon, onClick, className }) => {
  const content = (
    <Fragment>
      <ModalOverlay
        type={type}
        show={show}
        title={title}
        icon={icon}
        onClick={onClick}
      >
        <div className={className}>
          <span>{message}</span>
        </div>
      </ModalOverlay>
      {show && <Backdrop onClick={onClick} />}
    </Fragment>
  );

  return createPortal(content, document.getElementById('modal-root'));
};

export default Modal;
