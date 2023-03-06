import React from 'react';
import {Alert, Text} from 'react-native';
import {Box} from '../../components/Box';
import {InputCustom, WrapInput, Wrapper, WrapperButton} from './styled';
import {ButtonCustom} from '../../components/Button';
import {grayColor} from '../../utils/colors';
import {SigninContainer} from '../../container/SigninContainer';

export const SignInScreen = () => (
  <SigninContainer
    render={props => (
      <Wrapper>
        <Box />
        <WrapInput>
          <Text>PHONE NUMBER</Text>
          <InputCustom
            autoFocus={true}
            onChange={e => props.setPhoneNumber(e.nativeEvent.text)}
            maxLength={10}
          />
          <WrapperButton
            onPress={() =>
              props.number.length < 10
                ? Alert.alert('min length  10')
                : props.login()
            }>
            <ButtonCustom title="LOGIN" color={grayColor} />
          </WrapperButton>
        </WrapInput>
      </Wrapper>
    )}
  />
);
