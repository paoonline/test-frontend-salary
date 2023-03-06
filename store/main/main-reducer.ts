import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import actionTypes from './main-action-types';
import {MainContainerProps} from './types';
const initialState = {
  profile: {
    email: '',
    firstname: '',
    lastname: '',
    uid: '',
  },
  transaction: {
    available: 0,
    transactions: [],
  },
} as MainContainerProps;

const reducer = createReducer(initialState, builder => {
  builder.addCase(
    actionTypes.MAIN_PROFILE,
    (state, action: PayloadAction<any>) => {
      state.profile = action.payload;
    },
  );

  builder.addCase(
    actionTypes.MAIN_TRANS,
    (state, action: PayloadAction<any>) => {
      state.transaction = action.payload;
    },
  );

  builder.addCase(actionTypes.MAIN_CLEAR, state => {
    state.profile = initialState.profile;
    state.transaction = initialState.transaction;
  });
});

export default reducer;
