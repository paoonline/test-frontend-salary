import {createAction} from '@reduxjs/toolkit';
import actionTypes from './auth-types';

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

export default {
  authHandlePinAction,
  authRemovePinAction,
  authHandleSignin,
  authLoading,
};
