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
  align-items: center;
  justify-content: center;
  padding-horizontal: 16px;
`;

export const AboutBtn = styled(Button)``;
