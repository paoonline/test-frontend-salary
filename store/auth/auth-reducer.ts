import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import actionTypes from './auth-types';
import {AuthContainerProps} from './types';
import {InitContainerType} from '../../container/InitContainer/types';
const initialState = {
  token: '',
  pinCode: ['', '', '', '', '', ''],
  numberCode: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'X'],
  loading: false,
} as AuthContainerProps & InitContainerType;

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

  builder.addCase(
    actionTypes.AUTH_SIGNIN,
    (state, action: PayloadAction<any>) => {
      state.token = action.payload.token;
      state.loading = false;
    },
  );

  builder.addCase(actionTypes.AUTH_LOADING, state => {
    state.loading = true;
  });
});

export default reducer;
