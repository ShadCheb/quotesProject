import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native'
import { Edge } from 'react-native-safe-area-context';

import * as Styles from './styles';

interface ISafeAreaContainerProps {
  style?: StyleProp<ViewStyle>;
  edges?: Edge[];
  children: ReactNode;
}

export const SafeAreaContainer = ({ style, edges, children }: ISafeAreaContainerProps) => (
  <Styles.Container style={style} edges={edges}>
    {children}
  </Styles.Container>
);
