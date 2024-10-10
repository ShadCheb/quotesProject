import { StyleProp, ViewStyle } from 'react-native';

import type { SizeLoaderType } from '@/shared/ui/loader';
import { Loader } from '@/shared/ui/loader';

import * as Styles from './styles';

interface ILoaderBlockProps {
  style?: StyleProp<ViewStyle>;
  size?: SizeLoaderType;
  color?: string;
  visible?: boolean;
}

export const LoaderContainer = ({
  style,
  size = 'large',
  color,
  visible = false
}: ILoaderBlockProps) => visible
    ? (
      <Styles.Block style={style}>
        <Loader
          color={color}
          size={size}
        />
      </Styles.Block>
    )
    : null
