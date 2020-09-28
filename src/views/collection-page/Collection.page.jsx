// BASIC:
import React from 'react';
import './Collection.style.sass';

// COMPONENT:
import CollectionItem from '../../components/collection-item/CollectionItem.component';

// UTILITIES:
import { selectCollection } from '../../redux/collections/collectionsSelector';
import { connect } from 'react-redux';

// COMPONENT:
const CollectionPage = ({
  collection: { items, title },
  collection,
  match,
}) => {
  console.log('COLLECTIONS: ', collection);
  console.log('MATCH: ', match);
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
