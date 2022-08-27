import {
  ColorGradationType,
  ColorType,
  FontColorType,
  IconSizeType,
  IconType,
  ThemeProp,
} from '@ettawallet/react-core';
import styled from '@emotion/native';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const createIconSet = require('@ettawallet/react-core/src/components/atoms/Icon/libs/create-icon-set.js');

/* eslint-disable */
const customIcons: any = {};

export const registerCustomIconType = (id: string, customIcon: any) => {
  customIcons[id] = customIcon;
};

const getStyledIcon = (Component, size) => styled(Component)`
  font-size: ${({ theme }) => theme.iconSize[size]};
  text-align: center;
`;

const IconSetPath = require('@ettawallet/rn-bitcoin-icons/dist/');

export const getIconComponent = (type: IconType, size: IconSizeType): any => {
  switch (type) {
    case 'filled':
      const filledGlyphMap = `${IconSetPath} + ${type}-bitcoin-icons.json`;
      const filledIconsFile = `${IconSetPath} + 'fonts/' + ${type}-bitcoin-icons.ttf`;
      const filledIconSet = createIconSet(
        filledGlyphMap,
        'FilledBitcoinIcon',
        filledIconsFile
      );
      console.log("filled icon set");
      return getStyledIcon(filledIconSet, size);
    case 'outline':
      const outlineGlyphMap = `${IconSetPath} + ${type}-bitcoin-icons.json`;
      const outlineIconsFile = `${IconSetPath} + 'fonts/' + ${type}-bitcoin-icons.ttf`;
      const outlineIconSet = createIconSet(
        outlineGlyphMap,
        'OutlineBitcoinIcon',
        outlineIconsFile
      );
      console.log(outlineIconSet);
      return getStyledIcon(outlineIconSet, size);
    // default:
    //   if (Object.prototype.hasOwnProperty.call(customIcons, type)) {
    //     return getStyledIcon(customIcons[type], size);
    //   }
    //   return getStyledIcon(
    //     require('@ettawallet/rn-bitcoin-icons/dist/filled'),
    //     size
    //   );
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
