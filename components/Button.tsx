import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {grayColor} from '../utils/colors';

type ButtonProps = {
  title: string;
  color: string;
  onPress: () => void;
};

export const WrapButton = styled.View`
  background-color: ${grayColor};
  width: 100px;
  height: 40px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapButtonText = styled.TouchableOpacity<{color: string}>`
  color: ${p => (p.color ? p.color : 'black')};
`;

export const ButtonCustom = ({title, color, onPress}: ButtonProps) => (
  <WrapButton>
    <WrapButtonText color={color ? color : 'black'} onPress={onPress}>
      <Text>{title}</Text>
    </WrapButtonText>
  </WrapButton>
);

export const NumCode = styled.TouchableOpacity`
  width: 33.3%;
  height: 80px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
