import collectionsData from '../../mock-data/collections.data';

const INITIAL_STATE = {
  collections: collectionsData,
};

const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default collectionsReducer;
