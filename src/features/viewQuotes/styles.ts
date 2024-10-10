import styled from 'styled-components/native';

import { Text } from '@/shared/ui/text';

export const Container = styled.ScrollView`
  flex: 1;
  padding-horizontal: 16px;
`;

export const Status = styled.View`
  background-color: ${({ theme }) => theme.Colors.RED};
`;

export const StatusText = styled(Text)`
  color: ${({ theme }) => theme.Colors.BLACK};
  text-align: center;
`;
