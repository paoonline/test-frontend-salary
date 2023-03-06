import {InitContainerProps} from './types';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {authDataSelector} from '../../store/auth/auth-selectors';
import auth from '../../store/auth/auth-actions';
import main from '../../store/main/main-actions';
import {useEffect} from 'react';
import jwt_decode from 'jwt-decode';
import {jwtTokenType} from '../../commons/types';

export const InitContainer = ({render}: InitContainerProps) => {
  const authState = useAppSelector(authDataSelector);
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(auth.authClear());
    dispatch(main.mainClear());
  };

  const resetPin = () => {
    dispatch(auth.authResetPin());
  };

  const handleExpire = () => {
    let interval: number | null = null;
    clearInterval(interval as any);
    if (authState.token) {
      const token = jwt_decode(authState.token) as jwtTokenType;

      interval = setInterval(() => {
        const currentDate = new Date().getTime();
        const expDate = new Date(token.exp * 1000).getTime();
        if (currentDate > expDate) {
          resetPin();
          clearInterval(interval as any);
        }
      }, 1000);
    }
  };

  useEffect(() => {
    handleExpire();
  }, []);

  return render({
    token: authState.token,
    pinCode: authState.pinCode.toString().replace(/,/g, ''),
    loading: authState.loading,
    logout: () => logout(),
    resetPin: () => resetPin(),
    phoneNumber: authState.phoneNumber,
  });
};
