import {createAsyncThunk} from '@reduxjs/toolkit';
import actions from './auth-actions';
import services from './auth-services';
import {actionTypes} from '.';

const loginDispatch = createAsyncThunk(
  actionTypes.AUTH_HANDLE_PIN,
  async (data: any, {dispatch}) => {
    dispatch(actions.authLoading(true));
    try {
      services
        .signIn(data.data)
        .then(res => dispatch(actions.authHandleSignin(res)))
        .catch(() => {
          dispatch(actions.authLoading(false));
        });
    } catch (err: any) {
      dispatch(actions.authLoading(false));
    }
  },
);

export default {
  loginDispatch,
};
