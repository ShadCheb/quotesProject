import styled from 'styled-components/native';

export const Block = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.Colors.WHITE};
  z-index: 5;
`;
