import React from 'react';
import classes from './Button.module.css';
import { getClassByType } from '../../../utils/utils';

const Button = ({ children, onClick, btnType, disabled, style, className }) => {
  const buttonClass =
    className !== null && className !== undefined
      ? className
      : classes.button + getClassByType(classes, btnType);

  return (
    <button
      onClick={onClick}
      className={disabled ? `${buttonClass} ${classes.disabled}` : buttonClass}
      style={style}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
