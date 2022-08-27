import React, { FC } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { FilledIconName, OutlineIconName } from '@ettawallet/rn-bitcoin-icons';
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
  /**  Name of the icon. You must use the same icons from react-native-vector-icons */
  name: FilledIconName | OutlineIconName;
  /**  Default icon sizes from theme */
  size?: IconSizeType;
  /**  Icon family. You must use the same icons from bitcoin icon list */
  type: IconType;
  /** Font theme fill color */
  fontColor?: FontColorType;
  /** Palette theme fill color */
  colorVariant?: ColorType;
  /** Palette theme gradation fill color */
  colorTone?: ColorGradationType;
  style?: StyleProp<TextStyle>;
}

export const Icon: FC<IconProps> = ({
  name,
  size = 'centi',
  fontColor = 'dark',
  colorVariant,
  colorTone = 'orange',
  type,
  style,
  ...rest
}) => {
  const theme = useTheme() as ThemeProp;
  const color = getIconColor(colorVariant, colorTone, fontColor, theme);
  const IconComponent = getIconComponent(type, size);

  return (
    <IconComponent
      {...rest}
      color={color}
      size={size}
      style={style}
      name={name}
    />
  );
};

export default Icon;
