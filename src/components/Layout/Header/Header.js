import React from 'react';
import { createPortal } from 'react-dom';
import logo from '../../../assets/images/classicboardgames.png';
import classes from './Header.module.css';

const Header = ({ title1, title2 }) => {
  console.log('Header');

  const header = (
    <div className={classes.header}>
      <img src={logo} alt='Classic Board Games' title='Classic Board Games' />
      <h1 className={classes.title}>
        <span className={classes['title-1']}>{title1}</span>
        <span className={classes['title-2']}>{title2}</span>
      </h1>
    </div>
  );

  return createPortal(header, document.getElementById('header-root'));
};

export default React.memo(Header);
