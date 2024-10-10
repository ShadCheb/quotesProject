import { ReactNode, useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
  MaterialTopTabNavigationOptions
} from '@react-navigation/material-top-tabs';

import { sceneContainerStyle, screenOptions } from './config';

const Tab = createMaterialTopTabNavigator();

export type TabType = {
  name: string;
  title: string;
  component: () => React.JSX.Element;
  initialParams?: Partial<object | undefined>;
}

interface ITabsProps {
  tabs: TabType[];
  style?: StyleProp<ViewStyle>;
  options?: MaterialTopTabNavigationOptions;
  initialRouteName?: string;
  tabBar?: ((props: MaterialTopTabBarProps) => ReactNode);
}

export const Tabs = ({
  tabs,
  style,
  options = {},
  initialRouteName,
  tabBar
}: ITabsProps) => {
  const screenOptionsResult = useMemo(() => ({
    ...screenOptions,
    ...options
  }), [options]);

  return (
    <Tab.Navigator
      tabBar={tabBar}
      screenOptions={screenOptionsResult}
      initialRouteName={initialRouteName}
      style={style}
      sceneContainerStyle={sceneContainerStyle}
    >
      {
        tabs.map(tab => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{ title: tab.title }}
            initialParams={tab.initialParams}
          />
        ))
      }
    </Tab.Navigator >
  )
};
