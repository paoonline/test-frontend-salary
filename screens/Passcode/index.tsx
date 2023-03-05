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
            {props.numberCode.map((res, key) => (
              <NumCode
                key={key}
                onPress={() =>
                  res === 'X' ? props.remove() : props.handle(res)
                }>
                <Text>{res}</Text>
              </NumCode>
            ))}
          </WrapNumCode>
        </Wrapper>
      );
    }}
  />
);
