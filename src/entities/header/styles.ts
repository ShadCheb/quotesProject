import styled from 'styled-components/native';

import { SafeAreaContainer } from '@/shared/ui/container';
import { Text } from '@/shared/ui/text';

export const Header = styled.View`
  background-color: ${({ theme }) => theme.Colors.ORANGE};
`;

export const Shift = styled(SafeAreaContainer)`
  flex: 0;
`;

export const Container = styled.View`
  padding: 16px;
  flex-direction: row;
  align-items: center;
  height: 56px;
  width: 100%;
`;

export const TitleText = styled(Text)`
  flex: 1;
  color: ${({ theme }) => theme.Colors.WHITE};
`;

export const FlexView = styled.View`
  flex: 1;
`;
