// BASIC:
import React from 'react';
import './ShoppingListDropdown.sass';

// UTILITIES:
import { connect } from 'react-redux';
import {selectCartItems} from "../../redux/cart/cartSelector"

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

const mapStateToProps = (state) => ({
  cartItemsList: selectCartItems(state)
});

export default connect(mapStateToProps)(ShoppingListDropdown);
