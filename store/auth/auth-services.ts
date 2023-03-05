import api from '../../services/api';

const signIn = (number: string) => {
  const callApi = api.auth.signin({phone: number});
  return callApi;
};

export default {
  signIn,
};
