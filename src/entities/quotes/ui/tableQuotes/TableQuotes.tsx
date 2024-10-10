import { FlatList } from 'react-native';

import { TickerType } from '@/shared/api/types';
import { Colors } from '@/shared/theme/colors';

import * as Styles from './styles';
import { Row } from './ui';

export const TableQuotes = ({
  quotes
}: {
  quotes: TickerType[];
}) => (
  <Styles.Container>
    <Styles.Header
      col1="Name"
      col2="Open"
      col3="High"
      col4="Change"
      colorText={Colors.WHITE}
    />
    <FlatList
      data={quotes}
      showsVerticalScrollIndicator={false}
      horizontal={false}
      scrollEnabled
      renderItem={({ item, index }) => (
        <Row
          idx={index}
          col1={item.displayName}
          col2={item.open}
          col3={item.high}
          col4={item.dailyChange}
        />
      )}
      keyExtractor={(item) => item.symbol}
      numColumns={4}
    />
  </Styles.Container>
);
