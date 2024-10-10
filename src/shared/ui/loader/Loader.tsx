import { StyleProp, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import Svg, { Circle, G } from 'react-native-svg';

import { Colors } from '@/shared/theme/colors';

import { useAnimatedLoader } from './lib';
import * as Styles from './styles';
import { SizeLoaderType } from './types';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface ILoaderBlockProps {
  style?: StyleProp<ViewStyle>;
  size?: SizeLoaderType;
  color?: string;
}

export const Loader = ({
  style,
  size = 'medium',
  color = Colors.ORANGE,
}: ILoaderBlockProps) => {

  const {
    radius,
    strokeWidth,
    halfCircle,
    circleCircumference,
    strokeDashoffset,
    animatedStyles,
    animatedProps,
  } = useAnimatedLoader(size);

  return (
    <Styles.Container style={style}>
      <AnimatedSvg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
        style={animatedStyles.circle}
      >
        <G>
          <Circle
            cx="50%"
            cy="50%"
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeOpacity={0.2}
          />
          <AnimatedCircle
            animatedProps={animatedProps.art}
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={strokeDashoffset.value}
            strokeLinecap="round"
          />
        </G>
      </AnimatedSvg>
    </Styles.Container>
  )
};
