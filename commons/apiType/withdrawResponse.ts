import {ApiWrapType} from '../types';

export type WithdrawType = {
  message: string;
};

export type WithdrawResponse = ApiWrapType<WithdrawType>;
