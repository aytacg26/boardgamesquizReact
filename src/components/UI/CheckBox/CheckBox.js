import React from 'react';
import './CheckBox.css';

const CheckBox = ({ label, id, value, name, onChange }) => {
  console.log('Checkbox...');
  return (
    <label htmlFor={id} className='checkbox-container'>
      {label}
      <input
        type='checkbox'
        name={name}
        value={value}
        id={id}
        onChange={onChange}
      />
      <span className='checkmark'></span>
    </label>
  );
};

export default CheckBox;
