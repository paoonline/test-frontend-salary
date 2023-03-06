import {ProfileType} from '../../commons/apiType/profileResponse';
import {ContainerProps} from '../../commons/types';

export type MainContainerType = {
  profile: ProfileType;
};

export type MainContainerProps = ContainerProps<MainContainerType>;
