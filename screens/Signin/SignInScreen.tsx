import React from 'react';
import {Button, Text} from 'react-native';
import {Box} from '../../components/Box';
import {InputCustom, WrapInput, Wrapper} from './styled';

export const SignInScreen = () => (
  <Wrapper>
    <Box />
    <WrapInput>
      <Text>PHONE NUMBER</Text>
      <InputCustom />
      <Button title="LOGIN" />
    </WrapInput>
  </Wrapper>
);
