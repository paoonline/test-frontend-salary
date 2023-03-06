/* eslint-disable react-hooks/exhaustive-deps */
import {PasscodeContainerProps} from './types';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {authDataSelector} from '../../store/auth/auth-selectors';
import {actions} from '../../store/auth';
import {useEffect} from 'react';
import authDispatch from '../../store/auth/auth-dispatch';

export const PasscodeContainer = ({render}: PasscodeContainerProps) => {
  const authState = useAppSelector(authDataSelector);
  const dispatch = useAppDispatch();

  const handlePin = (num: string) => {
    dispatch(actions.authHandlePinAction({data: num}));
  };

  const removePin = () => {
    dispatch(actions.authRemovePinAction());
  };

  useEffect(() => {
    if (authState.pinCode.filter((res: string) => res !== '').length === 6) {
      dispatch(authDispatch.loginDispatch({data: authState.phoneNumber}));
    }
  }, [authState.pinCode]);

  return render({
    pinCode: authState.pinCode,
    numberCode: authState.numberCode,
    handle: (num: string) => handlePin(num),
    remove: () => removePin(),
  });
};
