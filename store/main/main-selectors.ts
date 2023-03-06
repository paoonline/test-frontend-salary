import {createSelector} from '@reduxjs/toolkit';

const mainSelector = (state: any | null) => state.main;
export const mainDataSelector = createSelector(mainSelector, (state: any) => {
  return state;
});

export default {
  mainDataSelector,
};
