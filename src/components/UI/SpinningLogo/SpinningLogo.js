import React from 'react';
import logo from '../../../assets/images/classicboardgames.png';
import classes from './SpinningLogo.module.css';

const SpinningLogo = () => {
  return (
    <div className={classes['animating-logo']}>
      <img
        src={logo}
        alt='Classic Board Games'
        title='Classic Board Games'
        width='150'
        height='150'
      />
    </div>
  );
};

export default SpinningLogo;
