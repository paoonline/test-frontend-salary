import React from 'react';
import {
  WrapNumCode,
  WrapNumber,
  WrapPasscode,
  WrapRow,
  Wrapper,
} from './styled';
import {Text} from 'react-native';
import {Circle} from '../../components/Circle';
import {PasscodeContainer} from '../../container/PasscodeContainer';
import {NumCode} from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const PasscodeScreen = () => (
  <PasscodeContainer
    render={props => {
      return (
        <Wrapper>
          <Text>SETTING PIN</Text>

          <WrapPasscode>
            <WrapRow>
              {props.pinCode.map((res, key) =>
                res !== '' ? (
                  <WrapNumber key={key}>
                    <Text>{res}</Text>
                  </WrapNumber>
                ) : (
                  <Circle key={key} />
                ),
              )}
            </WrapRow>
          </WrapPasscode>

          <WrapNumCode>
            {props.numberCode.map((res, key) =>
              res === 'X' ? (
                <Icon
                  key={key}
                  name="close"
                  size={30}
                  onPress={props.remove}
                  style={{margin: 25}}
                />
              ) : (
                <NumCode key={key} onPress={() => props.handle(res)}>
                  <Text>{res}</Text>
                </NumCode>
              ),
            )}
          </WrapNumCode>
        </Wrapper>
      );
    }}
  />
);
