import { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text as RNText, TextProps, TextStyle } from 'react-native';

import { TextVariantEnum, Typographic } from '@/shared/theme/typographic';

const styles = StyleSheet.create(Typographic);

export interface ITextProps extends TextProps {
  selectable?: boolean;
  style?: StyleProp<TextStyle>;
  variant: TextVariantEnum;
  children: string | number | ReactNode;
  align?: 'auto' | 'left' | 'center' | 'justify' | 'right';
  color?: string;
  numberOfLines?: number;
}

export const Text = (props: ITextProps) => {
  const {
    selectable,
    style,
    variant,
    color,
    align,
    children,
    numberOfLines = 0,
  } = props;

  return (
    <RNText
      selectable={selectable}
      style={[
        styles[variant],
        style,
        {
          ...(color ? { color } : {}),
          ...(align ? { textAlign: align } : {}),
        },
      ]}
      numberOfLines={numberOfLines}
      allowFontScaling={false}
    >
      {children}
    </RNText>
  );
};
