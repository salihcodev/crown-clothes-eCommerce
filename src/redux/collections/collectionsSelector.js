import { createSelector } from 'reselect';

const selectCollections = (state) => state.collections;

export const collectionsSelector = createSelector(
  [selectCollections],
  (collections) => collections.collections
);

export const selectCollectionsForPreview = createSelector(
  [collectionsSelector],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [collectionsSelector],
    (collections) => collections[collectionUrlParam]
  );
