import { TextStyle } from 'react-native';

export enum TextVariantEnum {
  H1 = 'H1',
  H2 = 'H2',
  BODY = 'Body',
  BODY_SMALL = 'BODY_SMALL',
  CAPTION = 'Caption',
}

const FontSizes = {
  SIZE_9: 9,
  SIZE_12: 12,
  SIZE_14: 14,
  SIZE_20: 20,
  SIZE_34: 34,
};

const LineHeights = {
  HEIGHT_11: 11,
  HEIGHT_16: 16,
  HEIGHT_20: 20,
  HEIGHT_23: 23,
  HEIGHT_40: 40,
};

type FontWeightTyper = '400' | '500';

const FontWeight: Record<string, FontWeightTyper> = {
  WEIGHT_400: '400',
  WEIGHT_500: '500',
};

export const Typographic: Record<TextVariantEnum, TextStyle> = {
  [TextVariantEnum.H1]: {
    fontSize: FontSizes.SIZE_34,
    lineHeight: LineHeights.HEIGHT_40,
    fontWeight: FontWeight.WEIGHT_400,
  },
  [TextVariantEnum.H2]: {
    fontSize: FontSizes.SIZE_20,
    lineHeight: LineHeights.HEIGHT_23,
    fontWeight: FontWeight.WEIGHT_500,
  },
  [TextVariantEnum.BODY]: {
    fontSize: FontSizes.SIZE_14,
    lineHeight: LineHeights.HEIGHT_20,
    fontWeight: FontWeight.WEIGHT_400,
  },
  [TextVariantEnum.BODY_SMALL]: {
    fontSize: FontSizes.SIZE_9,
    lineHeight: LineHeights.HEIGHT_11,
    fontWeight: FontWeight.WEIGHT_400,
  },
  [TextVariantEnum.CAPTION]: {
    fontSize: FontSizes.SIZE_12,
    lineHeight: LineHeights.HEIGHT_16,
    fontWeight: FontWeight.WEIGHT_400,
  },
};
