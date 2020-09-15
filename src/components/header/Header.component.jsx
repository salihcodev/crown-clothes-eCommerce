import React from 'react';
import './Header.styles.sass';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase-utils';

// navbar
const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <span className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </span>
      ) : (
        <Link to='sign-in' className='option'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
