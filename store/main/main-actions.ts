import {createAction} from '@reduxjs/toolkit';
import actionTypes from './main-action-types';

export const setProfile = createAction(
  actionTypes.MAIN_PROFILE,
  function prepare(data) {
    return {
      payload: {
        ...data.data,
      },
    };
  },
);

export const setTrans = createAction(
  actionTypes.MAIN_TRANS,
  function prepare(data) {
    return {
      payload: {
        ...data.data,
      },
    };
  },
);

export const withdrawAmount = createAction(
  actionTypes.MAIN_WITHDRAW_AMOUNT,
  function prepare(data) {
    return {
      payload: {
        ...data.data,
      },
    };
  },
);

export const mainClear = createAction(actionTypes.MAIN_CLEAR);

export default {
  setProfile,
  setTrans,
  withdrawAmount,
  mainClear,
};
