import {useAppDispatch, useAppSelector} from '../../store/store';
import {authDataSelector} from '../../store/auth/auth-selectors';
import {SigninContainerProps} from './types';
import {useState} from 'react';
import auth from '../../store/auth/auth-dispatch';

export const SigninContainer = ({render}: SigninContainerProps) => {
  const authState = useAppSelector(authDataSelector);
  const dispatch = useAppDispatch();
  const [number, setPhoneNumber] = useState<string>('');

  const loginWithPhoneNumber = () => {
    dispatch(auth.loginDispatch({data: number}));
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
