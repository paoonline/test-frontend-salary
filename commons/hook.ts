import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = () => {
  const token = AsyncStorage.getItem('token');
  return token;
};
