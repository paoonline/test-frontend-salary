import {ApiWrapType} from '../types';

export type ProfileType = {
  email: string;
  firstname: string;
  lastname: string;
  uid: string;
};

export type ProfileResponse = ApiWrapType<ProfileType>;
