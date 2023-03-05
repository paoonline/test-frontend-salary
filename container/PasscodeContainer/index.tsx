import {useState} from 'react';
import {PasscodeContainerProps} from './types';

export const PasscodeContainer = ({render}: PasscodeContainerProps) => {
  const [pinCode, setPinCode] = useState<string[]>(['', '', '', '', '', '1']);
  const [numberCode, setNumberCode] = useState<string[]>([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '',
    '0',
    'X',
  ]);
  return render({
    pinCode: pinCode,
    numberCode: numberCode,
  });
};
