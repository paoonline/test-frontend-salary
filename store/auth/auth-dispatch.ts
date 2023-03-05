import {createAsyncThunk} from '@reduxjs/toolkit';
import actionTypes from './auth-types';
import actions from './auth-actions';
import services from './auth-services';

const loginDispatch = createAsyncThunk(
  actionTypes.AUTH_HANDLE_PIN,
  async (data: any, {dispatch}) => {
    dispatch(actions.authLoading());
    try {
      services
        .signIn(data.data)
        .then(res => dispatch(actions.authHandleSignin(res)));
    } catch (err: any) {}
  },
);

export default {
  loginDispatch,
};
