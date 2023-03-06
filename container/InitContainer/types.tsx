import {ContainerProps} from '../../commons/types';

export type InitContainerType = {
  token: string;
  pinCode: string;
  loading: boolean;
  logout: () => void;
  resetPin: () => void;
};

export type InitContainerProps = ContainerProps<InitContainerType>;
