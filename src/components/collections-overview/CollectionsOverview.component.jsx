// BASIC:
import React from 'react';
import './CollectionsOverview.style.sass';

// UTILITIES:
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/collections/collectionsSelector';

// COMPONENTS:
import CollectionPreview from '../../components/collection-preview/CollectionPreview.component';

// COMPONENT:=>
const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionsData }) => (
      <CollectionPreview key={id} {...otherCollectionsData} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);
