import {createAction} from '@reduxjs/toolkit';
import actionTypes from './main-action-types';

export const getProfile = createAction(actionTypes.MAIN_PROFILE);

export default {
  getProfile,
};
