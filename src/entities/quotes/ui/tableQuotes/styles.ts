import styled from 'styled-components/native';

import { Row } from './ui/row/Row';

export const Container = styled.View`
  flex: 1;
  border-width: 1px;
  border-color: ${({ theme }) => theme.Colors.OVAERLAY};
`;

export const Header = styled(Row)`
  background-color: ${({ theme }) => theme.Colors.ORANGE};
`;
