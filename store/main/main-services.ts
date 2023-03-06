import {ProfileResponse} from '../../commons/apiType/profileResponse';
import {TransResponse} from '../../commons/apiType/transactionResponse';
import api from '../../services/api';

const getProfile = async () => {
  const callApi = await api.main.getProfile();
  return callApi as unknown as ProfileResponse;
};

const getTransaction = async () => {
  const callApi = await api.main.getTransaction();
  return callApi as unknown as TransResponse;
};

export default {
  getProfile,
  getTransaction,
};
