import {createSelector} from '@reduxjs/toolkit';

const authSelector = (state: any | null) => state.auth;
export const authDataSelector = createSelector(authSelector, (state: any) => {
  return state;
});

export default {
  authDataSelector,
};
