// BASIC:
import React from 'react';
import './Shop.style.sass';

// UTILITIES:
import { Route } from 'react-router-dom';

// COMPONENTS:
import CollectionsOverView from '../../components/collections-overview/CollectionsOverview.component';

// COMPONENT:
const ShopPage = ({ match }) => {
  // console.log(match);
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverView} />
    </div>
  );
};

export default ShopPage;
