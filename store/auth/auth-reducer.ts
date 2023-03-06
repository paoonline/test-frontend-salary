import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import actionTypes from './auth-actions-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContainerType} from './types';
const initialState = {
  token: '',
  pinCode: ['', '', '', '', '', ''],
  numberCode: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'X'],
  loading: false,
  phoneNumber: '',
} as AuthContainerType;

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
      AsyncStorage.setItem('token', action.payload.token);
    },
  );

  builder.addCase(
    actionTypes.AUTH_LOADING,
    (state, action: PayloadAction<any>) => {
      state.loading = action.payload;
    },
  );

  builder.addCase(actionTypes.AUTH_CLEAR, state => {
    state.loading = false;
    state.token = '';
    state.pinCode = initialState.pinCode;
    state.numberCode = initialState.numberCode;
    state.phoneNumber = '';
    AsyncStorage.setItem('token', '');
  });

  builder.addCase(actionTypes.AUTH_RESET_PIN, state => {
    state.pinCode = initialState.pinCode;
    state.token = '';
  });

  builder.addCase(
    actionTypes.AUTH_PHONE,
    (state, action: PayloadAction<any>) => {
      state.phoneNumber = action.payload;
    },
  );
});

export default reducer;
