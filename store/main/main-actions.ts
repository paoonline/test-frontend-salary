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

export default {
  setProfile,
};
