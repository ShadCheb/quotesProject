import styled from 'styled-components/native';

import { Header } from '@/entities/header';
import { Button } from '@/shared/ui/button';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.WHITE};
`;

export const Title = styled(Header)``;

export const Area = styled.View`
  flex: 1;
`;
export const TopBlock = styled.View`
  padding: 16px;
`;

export const QuotesBtn = styled(Button)``;
