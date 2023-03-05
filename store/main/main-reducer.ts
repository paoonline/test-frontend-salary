import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import actionTypes from './main-types';
import {AuthContainerProps} from './types';
const initialState = {
  pinCode: ['', '', '', '', '', ''],
  numberCode: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'X'],
} as AuthContainerProps;

const reducer = createReducer(initialState, builder => {
  builder.addCase(
    actionTypes.AUTH_HANDLE_PIN,
    (state, action: PayloadAction<any>) => {
      const indexPlacePinCode = state.pinCode.findIndex(res => res === '');
      if (indexPlacePinCode > -1) {
        state.pinCode[indexPlacePinCode] = action.payload.data;
      }
    },
  );

  builder.addCase(actionTypes.AUTH_REMOVE_PIN, state => {
    const indexPlacePinCode =
      state.pinCode.filter(res => res !== '').length - 1;
    if (indexPlacePinCode > -1) {
      state.pinCode[indexPlacePinCode] = '';
    }
  });
});

export default reducer;
