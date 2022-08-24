import {
  ColorGradationType,
  ColorType,
  FontColorType,
  IconSizeType,
  IconType,
  ThemeProp,
} from '@ettawallet/react-core';
import styled from '@emotion/native';

/* eslint-disable */
const customIcons: any = {};

export const registerCustomIconType = (id: string, customIcon: any) => {
  customIcons[id] = customIcon;
};

const getStyledIcon = (Component, size) => styled(Component)`
  font-size: ${({ theme }) => theme.iconSize[size]};
  text-align: center;
`;

export const getIconComponent = (type: IconType, size: IconSizeType): any => {
  switch (type) {
    case 'filled':
      return getStyledIcon(
        require('@ettawallet/rn-bitcoin-icons/dist/filled'),
        size
      );
    case 'outline':
      return getStyledIcon(
        require('@ettawallet/rn-bitcoin-icons/dist/outline'),
        size
      );
    default:
      if (Object.prototype.hasOwnProperty.call(customIcons, type)) {
        return getStyledIcon(customIcons[type], size);
      }
      return getStyledIcon(
        require('@ettawallet/rn-bitcoin-icons/dist/filled'),
        size
      );
  }
};
/* eslint-enable */
export const getIconColor = (
  colorVariant: ColorType | undefined,
  colorGradation: ColorGradationType | undefined,
  fontColor: FontColorType,
  theme: ThemeProp
): string => {
  if (colorVariant && colorGradation) {
    return theme.color[colorVariant][colorGradation];
  }
  return theme.font.color[fontColor];
};
