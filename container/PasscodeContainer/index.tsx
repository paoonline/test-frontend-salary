import {PasscodeContainerProps} from './types';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {authDataSelector} from '../../store/auth/auth-selectors';
import {actions} from '../../store/auth';

export const PasscodeContainer = ({render}: PasscodeContainerProps) => {
  const authState = useAppSelector(authDataSelector);
  const dispatch = useAppDispatch();

  const handlePin = (num: string) => {
    dispatch(actions.authHandlePinAction({data: num}));
  };

  const removePin = () => {
    dispatch(actions.authRemovePinAction());
  };

  return render({
    pinCode: authState.pinCode,
    numberCode: authState.numberCode,
    handle: (num: string) => handlePin(num),
    remove: () => removePin(),
  });
};
