import React, { FC } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { useTheme } from '@emotion/react';
import {
  ColorGradationType,
  ColorType,
  FontColorType,
  IconSizeType,
  IconType,
  ThemeProp,
} from '@ettawallet/react-core';
import { getIconColor, getIconComponent } from './helpers';

export interface IconProps {
  /**  Name of the icon. You must use the same icons from @bitcoin-design/bitcoin-icons-react */
  name: string;
  /**  Default icon sizes from theme */
  size?: IconSizeType;
  /**  Icon type. Is it filled or outline*/
  type: IconType;
  /** Font theme fill color */
  fontColor?: FontColorType;
  /** Palette theme fill color */
  colorVariant?: ColorType;
  /** Palette theme gradation fill color */
  colorTone?: ColorGradationType;
  style?: StyleProp<TextStyle>;
}

/** NOTE: When using colors, the order matters if you're trying to merge multiple types. */
const Icon: FC<IconProps> = ({
  name,
  size = 'centi',
  type,
  style,
  fontColor = 'light',
  colorVariant,
  colorTone = 'orange',
  ...rest
}) => {
  const theme = useTheme() as ThemeProp;
  const color = getIconColor(colorVariant, colorTone, fontColor, theme);
  const RNVIcon = getIconComponent(type, size);

  return <RNVIcon {...rest} style={style} name={name} color={color} />;
};

export default Icon;
