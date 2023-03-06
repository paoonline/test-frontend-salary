import {ContainerProps} from '../../commons/types';

export type WithdrawContainerType = {
  setAmount: (text: string) => void;
  withdraw: () => void;
  amount: string;
};

export type WithdrawContainerProps = ContainerProps<WithdrawContainerType>;
