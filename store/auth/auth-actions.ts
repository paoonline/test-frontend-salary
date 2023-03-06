import {createAction} from '@reduxjs/toolkit';
import actionTypes from './auth-actions-types';

export const authHandlePinAction = createAction(
  actionTypes.AUTH_HANDLE_PIN,
  function prepare(data) {
    return {
      payload: {
        ...data,
      },
    };
  },
);

export const authHandleSignin = createAction(
  actionTypes.AUTH_SIGNIN,
  function prepare(data) {
    return {
      payload: {
        ...data.data,
      },
    };
  },
);

export const authRemovePinAction = createAction(actionTypes.AUTH_REMOVE_PIN);
export const authLoading = createAction(actionTypes.AUTH_LOADING);
export const authClear = createAction(actionTypes.AUTH_CLEAR);
export const authResetPin = createAction(actionTypes.AUTH_RESET_PIN);

export default {
  authHandlePinAction,
  authRemovePinAction,
  authHandleSignin,
  authLoading,
  authClear,
  authResetPin,
};
