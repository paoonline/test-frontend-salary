import axios, {AxiosError, AxiosResponse} from 'axios';
import {getToken} from '../commons/hook';

interface SigninPropsRequest {
  phone: string;
}

interface AmountPropsRequest {
  amount: number;
}

axios.defaults.baseURL = 'http://localhost:3000/api/v1';

axios.interceptors.request.use(
  async config => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  res => res,
  (error: AxiosError) => {
    const {status} = error.response!;
    switch (status) {
      case 400:
        break;

      case 401:
        break;

      case 404:
        break;

      case 500:
        break;
    }
    return Promise.reject(error);
  },
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
};

const auth = {
  signin: (data: SigninPropsRequest) => request.post<void>('/signin', data),
};

const main = {
  getProfile: () => request.get<void>('/user/profile'),
  getTransaction: () => request.get<void>('/user/transactions'),
  withdraw: (data: AmountPropsRequest) =>
    request.post<void>('user/withdraw', data),
};

const api = {
  auth,
  main,
};

export default api;
