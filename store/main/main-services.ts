import {ProfileResponse} from '../../commons/apiType/profileResponse';
import {TransResponse} from '../../commons/apiType/transactionResponse';
import {WithdrawType} from '../../commons/apiType/withdrawResponse';
import api from '../../services/api';

const getProfile = async () => {
  const callApi = await api.main.getProfile();
  return callApi as unknown as ProfileResponse;
};

const getTransaction = async () => {
  const callApi = await api.main.getTransaction();
  return callApi as unknown as TransResponse;
};

const withdrawAmount = async (num: number) => {
  const callApi = await api.main.withdraw({amount: num});
  return callApi as unknown as WithdrawType;
};

export default {
  getProfile,
  getTransaction,
  withdrawAmount,
};
