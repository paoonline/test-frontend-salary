export type AuthContainerType = {
  token: string;
  pinCode: string[];
  numberCode: string[];
  loading: boolean;
  logout: () => void;
  resetPin: () => void;
};
