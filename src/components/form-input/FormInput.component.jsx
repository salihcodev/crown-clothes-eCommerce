import React from 'react';
import './FormInput.style.sass';

const FormInput = ({ inputOnChange, label, ...otherInputProps }) => {
  return (
    <div className='group'>
      <input
        className='form-input'
        onChange={inputOnChange}
        {...otherInputProps}
      />

      {label ? (
        <label
          className={`${
            otherInputProps.value.length ? 'shrink' : ''
          } form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
