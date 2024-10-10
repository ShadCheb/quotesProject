import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider } from 'styled-components/native';

import { Colors } from '@/shared/theme/colors';
import { Typographic } from '@/shared/theme/typographic';

import { RootNavigation } from './navigation/RootNavigation';

const theme = {
  Colors,
  Typographic,
};

export const App = () => (
  <ThemeProvider theme={theme}>
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  </ThemeProvider>
);
