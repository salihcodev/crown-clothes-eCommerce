import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutTrigger = ({ price }) => {
  const convertedPriceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HWUNkE9MIqvDGUtENWHbJTzGGCbgMRn6wZPlW3a1NlWwdfrGX6xEtDE4VIy4OpolUr0UEzNGQIBOApn65IO7gT900q0xWOGtw';

  const onToken = (token) => {
    console.log(token);
    alert('PAYMENT DONE SUCCESSFULLY');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={convertedPriceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutTrigger;
