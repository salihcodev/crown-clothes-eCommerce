import React from 'react';
import './JokerBtn.style.sass';

const JokerBtn = ({ children, isGoogleBtn, ...otherBtnProps }) => {
  return (
    <button
      className={`${isGoogleBtn ? 'google-sign-in' : ''} joker-btn`}
      {...otherBtnProps}>
      {children}
    </button>
  );
};

export default JokerBtn;
