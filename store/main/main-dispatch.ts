import {createAsyncThunk} from '@reduxjs/toolkit';
import actions from './main-actions';
import services from './main-services';
import {actionTypes} from '.';
import actionsLoading from '../auth/auth-actions';

const mainProfileDispatch = createAsyncThunk(
  actionTypes.MAIN_PROFILE,
  async (data: any, {dispatch}) => {
    try {
      services.getProfile().then(res => dispatch(actions.setProfile(res)));
    } catch (err: any) {}
  },
);

const mainTransDispatch = createAsyncThunk(
  actionTypes.MAIN_TRANS,
  async (data: any, {dispatch}) => {
    dispatch(actionsLoading.authLoading(true));
    try {
      services.getTransaction().then(res => dispatch(actions.setTrans(res)));
      dispatch(actionsLoading.authLoading(false));
    } catch (err: any) {}
  },
);

export default {
  mainProfileDispatch,
  mainTransDispatch,
};
