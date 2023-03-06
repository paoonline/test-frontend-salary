import {authDataSelector} from '../store/auth/auth-selectors';
import {useAppSelector} from '../store/store';

export const GetToken = () => {
  const authState = useAppSelector(authDataSelector);
  return authState.token;
};
