import React from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import SpinningLogo from '../../UI/SpinningLogo/SpinningLogo';
import classes from './EntryForm.module.css';
import { useName } from '../../../utils/CustomHooks/customHooks';
import PropTypes from 'prop-types';
import Loader from '../../UI/Loader/Loader';

const EntryForm = ({ message }) => {
  const { name, inputRef, isLoading, handleChange, handleSubmit } = useName('');

  return !isLoading ? (
    <form className={classes.EntryForm} onSubmit={handleSubmit}>
      <SpinningLogo />
      <span className={classes.Message}>{message}</span>
      <Input
        style={{ textAlign: 'center' }}
        type='text'
        value={name}
        onChange={handleChange}
        ref={inputRef}
        placeholder='Please enter your name'
        name='playerName'
        autoComplete='off'
      />
      <Button btnType='warning'>Start Game</Button>
    </form>
  ) : (
    <Loader />
  );
};

EntryForm.defaultProps = {
  message: `Welcome to Classic Board Games Quiz`,
};

EntryForm.propTypes = {
  message: PropTypes.string,
};

export default EntryForm;
