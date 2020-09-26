// BASIC:
import React from 'react';
import './CheckoutItem.style.sass';

// UTILITIES:
import { connect } from 'react-redux';
import {
  removeItem,
  controlTheItem,
  addItem,
} from '../../redux/cart/cartActions';

// COMPONENT:
const CheckoutItem = ({
  cartItem,
  removeCartItem,
  addCartItem,
  controlTheCartItem,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => controlTheCartItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addCartItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => removeCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeCartItem: (item) => dispatch(removeItem(item)),
  addCartItem: (item) => dispatch(addItem(item)),
  controlTheCartItem: (item) => dispatch(controlTheItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
