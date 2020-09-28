import { createSelector } from 'reselect';

const selectDirs = (state) => state.directories;

export const directoriesSelector = createSelector(
  [selectDirs],
  (dirs) => dirs.sections
);
