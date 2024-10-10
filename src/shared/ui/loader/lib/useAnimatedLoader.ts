import { useEffect, useMemo } from 'react';
import {
  cancelAnimation,
  Easing,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { SizeLoaderType } from '../types';

const mapsRadius: Record<SizeLoaderType, number> = {
  small: 8,
  medium: 16,
  large: 22,
};
const mapsDuration: Record<SizeLoaderType, number> = {
  small: 3000,
  medium: 3000,
  large: 3000,
};
const mapsStrokeWidth: Record<SizeLoaderType, number> = {
  small: 2,
  medium: 3,
  large: 4,
};

export const useAnimatedLoader = (size: SizeLoaderType) => {
  const rotation = useSharedValue(0);
  const strokeDashoffset = useSharedValue(0);

  const { radius, strokeWidth, halfCircle, circleCircumference, duration } =
    useMemo(() => {
      const radiusSize = mapsRadius[size];
      const strokeWidthSize = mapsStrokeWidth[size];
      const halfCircleSize = radiusSize + strokeWidthSize;
      const circleCircumferenceSize = 2 * Math.PI * radiusSize;
      const durationSize = mapsDuration[size];

      return {
        radius: radiusSize,
        strokeWidth: strokeWidthSize,
        halfCircle: halfCircleSize,
        circleCircumference: circleCircumferenceSize,
        duration: durationSize,
      };
    }, [size]);

  const animatedStyles = {
    circle: useAnimatedStyle(() => {
      const rotationDegree = interpolate(rotation.value, [0, 1], [0, 360]);

      return {
        transform: [{ rotate: `${rotationDegree}deg` }],
      };
    }),
  };

  const animatedProps = {
    art: useAnimatedProps(() => ({
      strokeDashoffset: strokeDashoffset.value,
    })),
  };

  useEffect(() => {
    const startAnimation = () => {
      rotation.value = 0;
      rotation.value = withRepeat(
        withTiming(1, { duration, easing: Easing.linear }),
        -1,
        false
      );
      strokeDashoffset.value = (4 * circleCircumference) / 5;
      strokeDashoffset.value = withRepeat(
        withTiming(circleCircumference / 5, {
          duration,
          easing: Easing.linear,
        }),
        -1,
        true
      );
    };

    startAnimation();
    return () => {
      cancelAnimation(rotation);
    };
  }, [circleCircumference, duration, rotation, strokeDashoffset]);

  return {
    radius,
    strokeWidth,
    halfCircle,
    circleCircumference,
    strokeDashoffset,
    animatedStyles,
    animatedProps,
  };
};
