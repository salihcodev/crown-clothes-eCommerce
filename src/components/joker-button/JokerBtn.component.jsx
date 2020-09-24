import React from 'react';
import './JokerBtn.style.sass';

const JokerBtn = ({ children, isGoogleBtn, inverted, ...otherBtnProps }) => {
  return (
    <button
      className={`${isGoogleBtn ? 'google-sign-in' : ''} ${
        inverted ? 'inverted' : ''
      }  joker-btn`}
      {...otherBtnProps}>
      {children}
    </button>
  );
};

export default JokerBtn;
