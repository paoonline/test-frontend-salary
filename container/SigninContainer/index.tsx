import {useState} from 'react';
import action from '../../store/auth/auth-actions';
import {useAppDispatch} from '../../store/store';
import {SigninContainerProps} from './types';

export const SigninContainer = ({render}: SigninContainerProps) => {
  const dispatch = useAppDispatch();
  const [number, setPhoneNumber] = useState<string>('');

  const loginWithPhoneNumber = () => {
    dispatch(action.authPhone(number));
  };

  const handlePhoneNumber = (text: string) => {
    setPhoneNumber(text);
  };

  return render({
    login: () => loginWithPhoneNumber(),
    setPhoneNumber: (text: string) => handlePhoneNumber(text),
    number: number,
  });
};
