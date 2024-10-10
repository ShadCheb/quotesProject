import styled from 'styled-components/native';

import { Tabs } from '@/shared/ui/tabs';

export const Area = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.WHITE};
`;

export const MainTabs = styled(Tabs)`
  background-color: ${({ theme }) => theme.Colors.WHITE};
`;
