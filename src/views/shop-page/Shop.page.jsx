import React from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview.component';
import CollectionsData from '../../components/component-data/Collections.data';
import './Shop.page.sass';

export default class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collectionsData: CollectionsData,
    };
  }

  render() {
    const ShopData = this.state.collectionsData;
    return (
      <div>
        {ShopData.map(({ id, ...otherCollectionsData }) => (
          <CollectionPreview key={id} {...otherCollectionsData} />
        ))}
      </div>
    );
  }
}
