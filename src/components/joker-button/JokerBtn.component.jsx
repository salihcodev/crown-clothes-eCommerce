import React from 'react';
import './JokerBtn.style.sass';

const JokerBtn = ({ children, ...otherBtnProps }) => {
  return (
    <button className='joker-btn' {...otherBtnProps}>
      {children}
    </button>
  );
};

export default JokerBtn;
