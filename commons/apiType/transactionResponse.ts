import {ApiWrapType} from '../types';

export type TransList = {
  amount: number;
  date: string;
  uid: number;
};

export type TransType = {
  available: number;
  transaction: TransList[];
};

export type TransResponse = ApiWrapType<TransType>;
