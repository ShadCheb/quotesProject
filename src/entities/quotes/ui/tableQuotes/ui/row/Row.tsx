import { StyleProp, ViewStyle } from 'react-native';
import { BounceInUp } from 'react-native-reanimated';

import { Colors } from '@/shared/theme/colors';
import { TextVariantEnum } from '@/shared/theme/typographic';

import * as Styles from './styles';

export const Row = ({
  idx,
  col1,
  col2,
  col3,
  col4,
  style,
  colorText = Colors.BLACK,
}: {
  idx?: number;
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  style?: StyleProp<ViewStyle>;
  colorText?: string;
}) => (
  <Styles.RowContainer style={style}>
    <Styles.Col>
      <Styles.Value
        variant={TextVariantEnum.BODY_SMALL}
        color={colorText}
      >
        {col1}
      </Styles.Value>
    </Styles.Col>
    <Styles.Col
      key={`${idx}_2_${col2}`}
      entering={idx !== undefined ? BounceInUp : undefined}
    >
      <Styles.Value
        variant={TextVariantEnum.BODY_SMALL}
        color={colorText}
      >
        {col2}
      </Styles.Value>
    </Styles.Col>
    <Styles.Col
      key={`${idx}_3_${col3}`}
      entering={idx !== undefined ? BounceInUp : undefined}
    >
      <Styles.Value
        variant={TextVariantEnum.BODY_SMALL}
        color={colorText}
      >
        {col3}
      </Styles.Value>
    </Styles.Col>
    <Styles.Col
      key={`${idx}_4_${col4}`}
      entering={idx !== undefined ? BounceInUp : undefined}
    >
      <Styles.Value
        variant={TextVariantEnum.BODY_SMALL}
        color={colorText}
      >
        {col4}
      </Styles.Value>
    </Styles.Col>
  </Styles.RowContainer>
);
