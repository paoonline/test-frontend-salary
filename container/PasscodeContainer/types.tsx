import {ContainerProps} from '../../commons/types';

export type PasscodeContainerType = {
  pinCode: string[];
  numberCode: string[];
  handle: (num: string) => void;
  remove: () => void;
};

export type PasscodeContainerProps = ContainerProps<PasscodeContainerType>;
