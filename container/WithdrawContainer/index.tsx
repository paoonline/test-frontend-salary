import {useState} from 'react';
import main from '../../store/main/main-dispatch';
import {useAppDispatch} from '../../store/store';
import {WithdrawContainerProps} from './types';

export const WithdrawContainer = ({render}: WithdrawContainerProps) => {
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState<string>('');

  const handleWithAmount = () => {
    dispatch(main.WithDrawAmountDispatch(amount));
  };

  return render({
    setAmount: (text: string) => setAmount(text),
    withdraw: () => handleWithAmount(),
    amount: amount,
  });
};
