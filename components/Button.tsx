import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {grayColor} from '../utils/colors';

interface ButtonProps extends ButtonSize {
  title: string;
  color: string;
  onPress?: () => void;
  width?: string;
  height?: string;
  textLeft?: boolean;
}

type ButtonSize = {
  width?: string;
  height?: string;
  textLeft?: boolean;
};

export const WrapButton = styled.View<ButtonSize>`
  background-color: ${grayColor};
  width: ${p => (p.width ? p.width : '100px')};
  height: ${p => (p.height ? p.height : '40px')};
  display: flex;
  justify-content: center;
  align-items: ${p => (p.textLeft ? 'flex-start' : 'center')};
  padding: ${p => (p.textLeft ? '10px' : '0px')};
`;

export const WrapButtonText = styled.View<{color: string}>`
  color: ${p => (p.color ? p.color : 'black')};
`;

export const ButtonCustom = ({
  title,
  color,
  height,
  width,
  textLeft,
}: ButtonProps) => (
  <WrapButton height={height} width={width} textLeft={textLeft}>
    <WrapButtonText color={color ? color : 'black'}>
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
  z-index
`;
