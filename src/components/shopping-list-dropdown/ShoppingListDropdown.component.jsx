// BASIC:
import React from 'react';
import './ShoppingListDropdown.sass';

// COMPONENTS:
import JokerBtn from '../joker-button/JokerBtn.component';

const ShoppingListDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <JokerBtn>GO TO CHECKOUT</JokerBtn>
  </div>
);

export default ShoppingListDropdown;
