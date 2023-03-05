import styled from 'styled-components/native';
import {grayColor} from '../utils/colors';

export const Circle = styled.View<{width?: string; height?: string}>`
    background-color: ${grayColor}
    width: ${p => (p.width ? p.width : 20)}px
    height: ${p => (p.height ? p.height : 20)}px
    border-radius: 20px;
    margin: 10px
`;
