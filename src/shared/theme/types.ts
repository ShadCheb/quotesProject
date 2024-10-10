import { Colors } from './colors';
import { Typographic } from './typographic';

export type ThemeType = {
  Colors: typeof Colors;
  Typographic: typeof Typographic;
};
