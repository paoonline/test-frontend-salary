import {ProfileType} from '../../../commons/apiType/profileResponse';
import {TransType} from '../../../commons/apiType/transactionResponse';

export type MainContainerProps = {
  profile: ProfileType;
  transaction: TransType;
  messsage: string;
};
