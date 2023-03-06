import {createAsyncThunk} from '@reduxjs/toolkit';
import actions from './main-actions';
import services from './main-services';
import {actionTypes} from '.';

const mainProfileDispatch = createAsyncThunk(
  actionTypes.MAIN_PROFILE,
  async (data: any, {dispatch}) => {
    // dispatch(actions.authLoading());
    try {
      services.getProfile().then(res => dispatch(actions.setProfile(res)));
    } catch (err: any) {}
  },
);

export default {
  mainProfileDispatch,
};
