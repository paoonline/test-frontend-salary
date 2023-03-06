import {MainContainerProps} from './types';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/store';
import main from '../../store/main/main-dispatch';
import mainSelector from '../../store/main/main-selectors';

export const MainContainer = ({render}: MainContainerProps) => {
  const dispatch = useAppDispatch();
  const mainState = useAppSelector(mainSelector.mainDataSelector);
  const initCall = () => {
    dispatch(main.mainProfileDispatch({}));
    dispatch(main.mainTransDispatch({}));
  };

  useEffect(() => {
    initCall();
  }, []);

  return render({
    ...mainState,
  });
};
