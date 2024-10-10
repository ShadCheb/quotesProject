import { TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

import styled from 'styled-components/native';

import { Loader } from '@/shared/ui/loader';
import { Text } from '@/shared/ui/text';

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

export const ButtonLoader = styled(Loader)`
  margin-right: 8px;
`;

export const ButtonText = styled(Text)<{
  isDisabled: boolean;
}>`
  color: ${({ theme }) => theme.Colors.WHITE};
`;

export const Button = styled(AnimatedTouchableOpacity)<{
  isDisabled: boolean;
}>`
  width: 100%;
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: ${({ isDisabled, theme }) =>
    isDisabled ? theme.Colors.OVAERLAY : theme.Colors.ORANGE};
`;
