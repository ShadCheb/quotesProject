import { createStackNavigator } from '@react-navigation/stack';

import { AboutAppScreen } from '@/screens/aboutApp';
import { QuotesScreen } from '@/screens/quotes';
import { commonNavigationOptions } from '@/shared/config';
import { AppRoutes } from '@/shared/routes';

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName={AppRoutes.ABOUT_APP}
    screenOptions={commonNavigationOptions}
  >
    <Stack.Screen name={AppRoutes.ABOUT_APP} component={AboutAppScreen} />
    <Stack.Screen name={AppRoutes.QUOTES} component={QuotesScreen} />
  </Stack.Navigator>
);
