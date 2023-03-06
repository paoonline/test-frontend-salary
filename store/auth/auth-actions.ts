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
export const authClear = createAction(actionTypes.AUTH_CLEAR);
export const authResetPin = createAction(actionTypes.AUTH_RESET_PIN);

export const authLoading = createAction(
  actionTypes.AUTH_LOADING,
  function prepare(loading) {
    return {
      payload: loading,
    };
  },
);

export const authPhone = createAction(
  actionTypes.AUTH_PHONE,
  function prepare(num) {
    return {
      payload: num,
    };
  },
);

export default {
  authHandlePinAction,
  authRemovePinAction,
  authHandleSignin,
  authLoading,
  authClear,
  authResetPin,
  authPhone,
};
