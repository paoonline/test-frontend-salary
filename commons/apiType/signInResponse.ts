import {ApiWrapType} from '../types';

export type SignInType = {
  phone: string;
  token: string;
};

export type SignInResponse = ApiWrapType<SignInType>;
