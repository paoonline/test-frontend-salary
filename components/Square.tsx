import styled from 'styled-components/native';
import {grayColor} from '../utils/colors';

export const Square = styled.View<{height: string}>`
    background-color: ${grayColor};
    width 100%;
    height: ${p => p.height}px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
`;

export const SquareList = styled.View<{height: string; between?: boolean}>`
    background-color: ${grayColor};
    width 100%;
    height: ${p => p.height}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-width: 1px;
    flex-direction: row;
    padding: 20px
`;

export const SquareListWithdraw = styled.View<{
  height: string;
}>`
    background-color: ${grayColor};
    width 100%;
    height: ${p => p.height}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 18px;
    margin-top: 2px;
`;

export const SquareListWithdrawSingle = styled.View<{
  height: string;
}>`
      background-color: ${grayColor};
      width 100%;
      height: ${p => p.height}px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      padding-left : 18px;
      padding-right : 18px;
      padding-top: 5px;
      margin-top: 2px;
  `;
