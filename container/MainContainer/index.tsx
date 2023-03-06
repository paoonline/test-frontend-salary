import {useAppDispatch, useAppSelector} from '../../store/store';
import {authDataSelector} from '../../store/auth/auth-selectors';
import {MainContainerProps} from './types';

export const MainContainer = ({render}: MainContainerProps) => {
  const authState = useAppSelector(authDataSelector);
  const dispatch = useAppDispatch();

  return render({

  });
};
