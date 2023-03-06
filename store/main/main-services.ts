import api from '../../services/api';

const getProfile = async () => {
  const callApi = await api.main.getProfile();
  return callApi;
};

const getTransaction = async () => {
  const callApi = await api.main.getTransaction();
  return callApi;
};

export default {
  getProfile,
  getTransaction,
};
