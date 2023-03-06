import {ContainerProps} from '../../commons/types';

export type SigninContainerType = {
  login: () => void;
  setPhoneNumber: (text: string) => void;
  number: string;
};

export type SigninContainerProps = ContainerProps<SigninContainerType>;
