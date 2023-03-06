import {useAppDispatch} from '../../store/store';
import {MainContainerProps} from './types';
import {useEffect} from 'react';
import main from '../../store/main/main-services';

export const MainContainer = ({render}: MainContainerProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    main.getTransaction();
  }, []);

  return render({});
};
