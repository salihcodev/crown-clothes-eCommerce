// BASIC:
import React from 'react';
import './CollectionItem.style.sass';

// UTILITIES:
import { addItem } from '../../redux/cart/cartActions';
import { connect } from 'react-redux';

// COMPONENTs:
import JokerBtn from '../joker-button/JokerBtn.component';

// COMPONENT=>
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>

      <JokerBtn inverted onClick={() => addItem(item)}>
        Add to Cart
      </JokerBtn>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
