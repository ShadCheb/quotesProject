import Animated from 'react-native-reanimated';

import styled, { css } from 'styled-components/native';

import { Text } from '@/shared/ui/text';

export const RowContainer = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const Col = styled(Animated.View)<{ width?: number }>`
  align-items: center;
  justify-content: center;
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  height: 48px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.Colors.OVAERLAY};
  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : css`
          flex: 1;
        `};
`;

export const Value = styled(Text)`
  color: ${({ theme }) => theme.Colors.BLACK};
`;
