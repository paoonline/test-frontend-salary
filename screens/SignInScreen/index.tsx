import React from 'react';
import {Alert, Text} from 'react-native';
import {Box} from '../../components/Box';
import {InputCustom, WrapInput, Wrapper, WrapperButton} from './styled';
import {ButtonCustom} from '../../components/Button';
import {grayColor} from '../../utils/colors';

export const SignInScreen = () => (
  <Wrapper>
    <Box />
    <WrapInput>
      <Text>PHONE NUMBER</Text>
      <InputCustom autoFocus={true} />
      <WrapperButton>
        <ButtonCustom
          title="LOGIN"
          color={grayColor}
          onPress={() => Alert.alert('1')}
        />
      </WrapperButton>
    </WrapInput>
  </Wrapper>
);
