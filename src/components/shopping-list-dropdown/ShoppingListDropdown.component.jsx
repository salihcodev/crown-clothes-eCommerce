// BASIC:
import React from 'react';
import './ShoppingListDropdown.sass';

// UTILITIES:
import { connect } from 'react-redux';

// COMPONENTS:
import CartItem from '../cart-item/CartItem.component';
import JokerBtn from '../joker-button/JokerBtn.component';

const ShoppingListDropdown = ({ cartItemsList }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItemsList.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
    <JokerBtn>GO TO CHECKOUT</JokerBtn>
  </div>
);

const mapStateToProps = ({ cart: { cartItemsList } }) => ({
  cartItemsList,
});

export default connect(mapStateToProps)(ShoppingListDropdown);
