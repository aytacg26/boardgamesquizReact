import React from 'react';
import classes from './Loader.module.css';

const Loader = (props) => {
  return <div className={classes['lds-hourglass']}></div>;
};

export default Loader;
