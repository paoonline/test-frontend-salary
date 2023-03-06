import {ReactElement} from 'react';

export interface ContainerProps<T> {
  render: (props: T) => ReactElement;
}

export interface jwtTokenType {
  exp: number;
  iat: number;
  phone: string;
  userUid: string;
}
