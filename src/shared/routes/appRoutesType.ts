import { StackNavigationProp } from '@react-navigation/stack';

import { AppRoutes } from './appRoutes';

export type AppRoutesParamsType = {
  [AppRoutes.ABOUT_APP]: undefined;
  [AppRoutes.QUOTES]: undefined;
};

export type AppNavigationType = StackNavigationProp<AppRoutesParamsType>;
