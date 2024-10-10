import { useNavigation } from '@react-navigation/native';

import { ViewQuotes } from '@/features/viewQuotes';
import { AppNavigationType, AppRoutes } from '@/shared/routes';
import { BottomShiftBlock } from '@/shared/ui/bottomShiftBlock';

import * as Styles from './styles';

export const QuotesScreen = () => {
  const navigation = useNavigation<AppNavigationType>();

  const onFollowAboutApp = () => {
    navigation.navigate(AppRoutes.ABOUT_APP);
  }

  return (
    <Styles.Container>
      <Styles.Title title="Котировки" />
      <Styles.Area>
        <Styles.TopBlock>
          <Styles.QuotesBtn
            text="О приложении"
            onPress={onFollowAboutApp}
          />
        </Styles.TopBlock>
        <ViewQuotes />
        <BottomShiftBlock />
      </Styles.Area>
    </Styles.Container>
  );
};
