import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import actionTypes from './main-action-types';
import {MainContainerProps} from './types';
const initialState = {
  profile: {},
} as MainContainerProps;

const reducer = createReducer(initialState, builder => {
  builder.addCase(
    actionTypes.MAIN_PROFILE,
    (state, action: PayloadAction<any>) => {
      state.profile = action.payload;
    },
  );
});

export default reducer;
