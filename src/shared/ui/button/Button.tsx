import { StyleProp, ViewStyle } from 'react-native';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming
} from 'react-native-reanimated';

import { Colors } from '@/shared/theme/colors';
import { TextVariantEnum } from '@/shared/theme/typographic';

import * as Styles from './styles';

const SHIFT = 4;
const TIME = 50;
const EASING = Easing.elastic(1.5);

export interface IButtonProps {
  text?: string;
  children?: string;
  loading?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  onDisabledPress?: () => void;
}

export const Button = ({
  text,
  children,
  loading,
  disabled = false,
  style,
  onPress,
  onDisabledPress
}: IButtonProps) => {
  const X = useSharedValue(0);

  const tremblingStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: X.value }]
  }));

  const startTrembling = () => {
    X.value = withSequence(
      withTiming(-SHIFT, { duration: TIME / 2, easing: EASING }),
      withRepeat(
        withTiming(SHIFT, {
          duration: TIME,
          easing: EASING
        }),
        7,
        true
      ),
      withTiming(0, { duration: TIME / 2, easing: EASING })
    );
  };

  const onPressBtn = () => {
    if (loading) return;

    if (disabled) {
      startTrembling();
      onDisabledPress?.();
      return;
    }

    onPress?.();
  }

  return (
    <Styles.Button
      activeOpacity={0.65}
      isDisabled={disabled}
      style={[style, tremblingStyle]}
      onPress={onPressBtn}
    >
      {
        loading && !disabled
          ? (
            <Styles.ButtonLoader
              size='small'
              color={Colors.WHITE}
            />
          )
          : null
      }
      <Styles.ButtonText
        isDisabled={disabled}
        variant={TextVariantEnum.BODY}
      >
        {text || children || ''}
      </Styles.ButtonText>
    </Styles.Button>
  );
}
