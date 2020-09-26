// BASIC:
import React from 'react';
import './CheckoutItem.style.sass';

// UTILITIES:
import { connect } from 'react-redux';
import { removeItem } from '../../redux/cart/cartActions';

// COMPONENT:
const CheckoutItem = ({ cartItem, removeCartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => removeCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeCartItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
