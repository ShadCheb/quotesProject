import { useNavigation } from '@react-navigation/native';

import type { AppNavigationType } from '@/shared/routes';
import { AppRoutes } from '@/shared/routes';

import * as Styles from './styles';

export const AboutAppScreen = () => {
  const navigation = useNavigation<AppNavigationType>();

  const onFollowQuotes = () => {
    navigation.navigate(AppRoutes.QUOTES);
  };

  return (
    <Styles.Container>
      <Styles.Title title="О приложении" />
      <Styles.Area>
        <Styles.AboutBtn
          text="Котировки"
          onPress={onFollowQuotes}
        />
      </Styles.Area>
    </Styles.Container>
  );
};
