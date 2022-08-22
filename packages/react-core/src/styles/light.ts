import { ThemeProp } from '../types/defaults';
import {
  borderRadius,
  borderWidth,
  fontColor,
  fontFiles,
  fontStack,
  fontWeight,
  iconSize,
  miscellaneous,
  spacing,
  statusColor,
  typography,
  zIndex,
} from './definitions';

const primaryGradation = {
  xlight: '#fef9f0',
  light: '#fccb83',
  medium: '#f89907',
  dark: '#ae6b05',
  xdark: '#633d03',
};

const secondaryGradation = {
  xlight: '#f8f7f7',
  light: '#c2bfbc',
  medium: '#85807a',
  dark: '#5d5955',
  xdark: '#353231',
};

const primaryColors = {
  orange: '#F7931A',
  red: '#EB5757',
  green: '#27AE60',
  blue: '#2D9CDB',
  purple: '#BB6BD9',
  white: '#FFFFFF',
  neutral1: '#F8F8F8',
  neutral2: '#F4F4F4',
  neutral3: '#EDEDED',
  neutral4: '#DEDEDE',
  neutral5: '#BBBBBB',
  neutral6: '#999999',
  neutral7: '#777777',
  neutral8: '#404040',
  black: '#000000',
};

export const lightTheme: ThemeProp = {
  color: {
    primary: {
      ...primaryColors,
    },
    secondary: { ...secondaryGradation },
    ...statusColor,
  },
  miscellaneous,
  spacing,
  iconSize,
  borderRadius,
  borderWidth,
  typography,
  font: {
    color: fontColor,
    stack: fontStack,
    weight: fontWeight,
    files: fontFiles,
  },
  zIndex,
};
