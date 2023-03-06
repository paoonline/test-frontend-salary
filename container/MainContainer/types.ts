import {ProfileType} from '../../commons/apiType/profileResponse';
import {TransType} from '../../commons/apiType/transactionResponse';
import {ContainerProps} from '../../commons/types';

export type MainContainerType = {
  profile: ProfileType;
  transaction: TransType;
};

export type MainContainerProps = ContainerProps<MainContainerType>;
