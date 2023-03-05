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

export const authRemovePinAction = createAction(actionTypes.AUTH_REMOVE_PIN);

export default {
  authHandlePinAction,
  authRemovePinAction,
};
