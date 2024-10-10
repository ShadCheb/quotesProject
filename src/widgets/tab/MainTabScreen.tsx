import { AboutAppScreen } from '@/screens/aboutApp';
import { QuotesScreen } from '@/screens/quotes';
import { TabType } from '@/shared/ui/tabs';

import * as Styles from './styles';

const tabs: TabType[] = [
  {
    name: 'aboutApp',
    title: 'О приложении',
    component: AboutAppScreen,
  },
  {
    name: 'quotes',
    title: 'Котировки',
    component: QuotesScreen,
  }
];

export const MainTabScreen = () => (
  <Styles.Area>
    <Styles.MainTabs
      tabs={tabs}
    />
  </Styles.Area>
);
