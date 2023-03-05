import styled from 'styled-components/native';

export const TextBold = styled.Text<{size: string}>`
  font-weight: bold;
  font-size: ${p => p.size}px;
`;
