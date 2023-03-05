import {InitContainerProps} from './types';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {authDataSelector} from '../../store/auth/auth-selectors';

export const InitContainer = ({render}: InitContainerProps) => {
  const authState = useAppSelector(authDataSelector);
  const dispatch = useAppDispatch();

  const pincode = authState.pinCode.find((res: string) => res !== '');
  return render({
    token: authState.token,
    pinCode: pincode,
    loading: authState.loading,
  });
};
