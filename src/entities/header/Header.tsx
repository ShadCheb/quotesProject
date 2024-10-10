import { StatusBar, StyleProp, ViewStyle } from 'react-native';
import { Edge } from 'react-native-safe-area-context';

import { TextVariantEnum } from '@/shared/theme/typographic';

import * as Styles from './styles';

const edges: Edge[] = ['top'];

export const Header = ({
  style,
  title,
}: {
  style?: StyleProp<ViewStyle>;
  title?: string;
}) => (
  <Styles.Header style={style}>
    <Styles.Shift edges={edges}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
    </Styles.Shift>

    <Styles.Container>
      {
        title
          ? (
            <Styles.TitleText
              variant={TextVariantEnum.H2}
              numberOfLines={1}
            >
              {title}
            </Styles.TitleText>
          )
          : <Styles.FlexView />
      }
    </Styles.Container>
  </Styles.Header>
);
