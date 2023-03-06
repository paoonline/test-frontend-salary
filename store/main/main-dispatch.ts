import {createAsyncThunk} from '@reduxjs/toolkit';
import actions from './main-actions';
import services from './main-services';
import {actionTypes} from '.';
import actionsLoading from '../auth/auth-actions';
import {Alert} from 'react-native';

const mainProfileDispatch = createAsyncThunk(
  actionTypes.MAIN_PROFILE,
  async (data: any, {dispatch}) => {
    try {
      services
        .getProfile()
        .then(res => dispatch(actions.setProfile(res)))
        .catch(() => {
          dispatch(actionsLoading.authLoading(false));
        });
    } catch (err: any) {
      dispatch(actionsLoading.authLoading(false));
    }
  },
);

const mainTransDispatch = createAsyncThunk(
  actionTypes.MAIN_TRANS,
  async (data: any, {dispatch}) => {
    dispatch(actionsLoading.authLoading(true));
    try {
      services
        .getTransaction()
        .then(res => dispatch(actions.setTrans(res)))
        .catch(() => {
          dispatch(actionsLoading.authLoading(false));
        });
      dispatch(actionsLoading.authLoading(false));
    } catch (err: any) {
      dispatch(actionsLoading.authLoading(false));
    }
  },
);

const WithDrawAmountDispatch = createAsyncThunk(
  actionTypes.MAIN_WITHDRAW_AMOUNT,
  async (data: any, {dispatch}) => {
    dispatch(actionsLoading.authLoading(true));
    try {
      services
        .withdrawAmount(data)
        .then(res => {
          dispatch(actionsLoading.authLoading(false));
          Alert.alert(res.message);
        })
        .catch(() => {
          Alert.alert('Fail');
          dispatch(actionsLoading.authLoading(false));
        });
    } catch (err: any) {
      dispatch(actionsLoading.authLoading(false));
    }
  },
);

export default {
  mainProfileDispatch,
  mainTransDispatch,
  WithDrawAmountDispatch,
};
