import 'styled-components/native';

import { ThemeType } from '@/shared/theme/types';

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
