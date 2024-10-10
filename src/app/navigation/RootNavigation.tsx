import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator } from './navigators';

export const RootNavigation = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);
