import { LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

import * as Styles from './styles';

const edges: Edge[] = ['bottom'];

interface IBottomShiftBlockProps {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  onLayout?: ({ nativeEvent }: LayoutChangeEvent) => void;
}

export const BottomShiftBlock = ({ style, children, onLayout }: IBottomShiftBlockProps) => (
  <SafeAreaView style={style} edges={edges} onLayout={onLayout}>
    {children || <Styles.Block />}
  </SafeAreaView>
);
