import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';

import { Colors } from '@/shared/theme/colors';
import { TextVariantEnum, Typographic } from '@/shared/theme/typographic';

export const screenOptions: MaterialTopTabNavigationOptions = {
  tabBarStyle: {
    width: 'auto',
    height: 48,
    backgroundColor: 'transparent',
    elevation: 0,
  },
  tabBarLabelStyle: {
    ...Typographic[TextVariantEnum.H2],
  },
  tabBarIndicatorStyle: {
    marginBottom: -1,
    backgroundColor: Colors.ORANGE,
  },
  tabBarIndicatorContainerStyle: {
    borderBottomWidth: 1,
    borderColor: Colors.WHITE,
  },
  tabBarItemStyle: {
  },
  tabBarContentContainerStyle: {
  },
  lazy: true,
  tabBarActiveTintColor: Colors.ORANGE,
  tabBarInactiveTintColor: Colors.WHITE,
  tabBarAllowFontScaling: false
};

export const sceneContainerStyle = {
  backgroundColor: Colors.WHITE
};
