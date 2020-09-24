// BASIC:
import React from 'react';
import './Header.styles.sass';

// COMPONENTS:
import CartIcon from '../cart-icon/CartIcon.component';
import ShoppingListDropdown from '../shopping-list-dropdown/ShoppingListDropdown.component';

// UTILITIES:
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase-utils';
import { connect } from 'react-redux';

// NAV COMPONENT:
const Header = ({ currentUser, hidden }) => (
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

      <CartIcon />
    </div>
    {hidden ? null : <ShoppingListDropdown />}
  </div>
);

const mapPropsToState = ({ user: { currentUser }, cart: { hidden } }) => {
  // console.log(currentUser);
  return {
    currentUser,
    hidden,
  };
};
export default connect(mapPropsToState)(Header);
