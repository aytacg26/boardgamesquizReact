import React, { forwardRef } from 'react';
import classes from './Input.module.css';

const Input = (props, ref) => {
  return (
    <div className={classes.Input}>
      <input {...props} ref={ref} />
    </div>
  );
};

export default forwardRef(Input);
