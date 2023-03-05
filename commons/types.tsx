import {ReactElement} from 'react';

export interface ContainerProps<T> {
  render: (props: T) => ReactElement;
}
