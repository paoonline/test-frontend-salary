import {SignInResponse} from '../../commons/apiType/signInResponse';
import api from '../../services/api';

const signIn = async (number: string) => {
  const callApi = await api.auth.signin({phone: number});
  return callApi as unknown as SignInResponse;
};

export default {
  signIn,
};
