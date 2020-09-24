// BASIC:
import React from 'react';
import './CartIcon.style.sass';

// UTILITIES:
import { connect } from 'react-redux';
import { toggleCartVisibility } from '../../redux/cart/cartActions';

// CART ICON
import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartVisibility }) => (
  <section className='cart-icon' onClick={toggleCartVisibility}>
    <ShoppingCart className='shopping-icon' />
    <span className='cart-items-count'>0</span>
  </section>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
