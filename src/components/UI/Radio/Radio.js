import React from 'react';
import './Radio.css';

const Radio = ({ label, name, id, value, onChange, onClick }) => {
  console.log('Radio...');

  return (
    <label htmlFor={id} className='check-container'>
      {label}
      <input
        id={id}
        type='radio'
        name={name}
        value={value}
        onChange={onChange}
        onClick={onClick}
      />
      <span className='check-mark'></span>
    </label>
  );
};

export default Radio;
