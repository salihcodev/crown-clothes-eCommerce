// BASIC:
import React from 'react';
import './Checkout.styles.sass';

// UTILITIES:
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { selectCartItemsTotal } from '../../redux/cart/cartSelector';

// COMPONENTS:
import CheckoutItem from '../../components/checkout-item/CheckoutItem.component';
import StripeCheckoutTrigger from '../../components/stripe-trigger/StripeTrigger.component';

// COMPONENTS:
const CheckoutPage = ({ selectCartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {selectCartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${total}</div>

    <div className='test-warning'>
      <p className='flag'>
        *Please use the following test credit card for payments*
      </p>
      <p className='fake-data'> 4242 4242 4242 4242 - Exp: 01/20 - CVV: 123</p>
    </div>

    {/* handel payment method */}
    <div className='stripe-payment'>
      <StripeCheckoutTrigger price={total} />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  selectCartItems: selectCartItems,
  total: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
