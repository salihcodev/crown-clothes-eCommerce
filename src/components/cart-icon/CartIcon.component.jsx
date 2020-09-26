// BASIC:
import React from 'react';
import './CartIcon.style.sass';

// UTILITIES:
import { connect } from 'react-redux';
import { toggleCartVisibility } from '../../redux/cart/cartActions';
import { selectItemsCount } from '../../redux/cart/cartSelector';

// CART ICON
import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartVisibility, cartItemCount }) => (
  <section className='cart-icon' onClick={toggleCartVisibility}>
    <ShoppingCart className='shopping-icon' />
    <span className='cart-items-count'>{cartItemCount}</span>
  </section>
);

const mapStateToProps = (state) => ({
  cartItemCount: selectItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
