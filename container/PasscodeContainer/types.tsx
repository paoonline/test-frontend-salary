import {ContainerProps} from '../../commos/types';

type PasscodeContainerType = {
  pinCode: string[];
  numberCode: string[];
};

export type PasscodeContainerProps = ContainerProps<PasscodeContainerType>;
