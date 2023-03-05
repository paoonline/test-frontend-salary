import {ContainerProps} from '../../commons/types';

export type InitContainerType = {
  token: string;
  pinCode: string;
  loading: boolean;
};

export type InitContainerProps = ContainerProps<InitContainerType>;
