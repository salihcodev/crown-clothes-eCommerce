// BASIC:
import React from 'react';
import './ShoppingListDropdown.sass';

// UTILITIES:
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { toggleCartVisibility } from '../../redux/cart/cartActions';

// COMPONENTS:
import CartItem from '../cart-item/CartItem.component';
import JokerBtn from '../joker-button/JokerBtn.component';

const ShoppingListDropdown = ({ cartItemsList, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItemsList.length ? (
        cartItemsList.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <span className='empty-message'>You haven't add items to cart yet</span>
      )}
    </div>
    <JokerBtn
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartVisibility());
      }}>
      GO TO CHECKOUT
    </JokerBtn>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItemsList: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(ShoppingListDropdown));
