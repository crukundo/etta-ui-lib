import * as React from 'react';
import {
  Animated,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  Platform,
} from 'react-native';
import { useTheme } from '@emotion/react';
import { ThemeProp, Elevation } from '@ettawallet/react-core';

export const isAnimatedValue = (
  it: number | string | Animated.AnimatedInterpolation
): it is Animated.Value => it instanceof Animated.Value;

export type Props = React.ComponentPropsWithRef<typeof View> & {
  /**
   * Content of the `Surface`.
   */
  children: React.ReactNode;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  /**
   * Changes shadows and background on iOS and Android.
   * Used to create UI hierarchy between components.
   *
   * Note: In version 2 the `elevation` prop was accepted via `style` prop i.e. `style={{ elevation: 4 }}`.
   * It's no longer supported with theme version 3 and you should use `elevation` property instead.
   */
  elevation?: 0 | 1 | 2 | 3 | 4 | 5 | Animated.Value;
  /**
   * @optional
   */
  theme?: ThemeProp;
};

/**
 * Surface is a basic container that can give depth to an element with elevation shadow.
 * On dark theme with `adaptive` mode, surface is constructed by also placing a semi-transparent white overlay over a component surface.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Surface, Text } from '@ettawallet/react-core';
 * import { StyleSheet } from 'react-native';
 *
 * const MyComponent = () => (
 *   <Surface style={styles.surface} elevation={4}>
 *      <Text>Surface</Text>
 *   </Surface>
 * );
 *
 * export default MyComponent;
 *
 * const styles = StyleSheet.create({
 *   surface: {
 *     padding: 8,
 *     height: 80,
 *     width: 80,
 *     alignItems: 'center',
 *     justifyContent: 'center',
 *   },
 * });
 * ```
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Surface = ({
  elevation = 1,
  children,
  theme: overridenTheme,
  style,
  ...props
}: Props) => {
  const theme = useTheme() as ThemeProp;

  const { color } = theme;

  const inputRange = [0, 1, 2, 3, 4, 5];

  const backgroundColor = (() => {
    if (isAnimatedValue(elevation)) {
      return elevation.interpolate({
        inputRange,
        outputRange: inputRange.map(elevation => {
          return color.elevation?.[`level${elevation as Elevation}`];
        }),
      });
    }

    return color.elevation?.[`level${elevation}`];
  })();

  if (Platform.OS === 'android') {
    const elevationLevel = [0, 3, 6, 9, 12, 15];

    const getElevationAndroid = () => {
      if (isAnimatedValue(elevation)) {
        return elevation.interpolate({
          inputRange,
          outputRange: elevationLevel,
        });
      }

      return elevationLevel[elevation];
    };

    const { margin, padding, transform, borderRadius } = (StyleSheet.flatten(
      style
    ) || {}) as ViewStyle;

    const outerLayerStyles = { margin, padding, transform, borderRadius };
    const sharedStyle = [{ backgroundColor }, style];

    return (
      <Animated.View
        {...props}
        style={[
          {
            backgroundColor,
            transform,
          },
          outerLayerStyles,
          sharedStyle,
          {
            elevation: getElevationAndroid(),
          },
        ]}
      >
        {children}
      </Animated.View>
    );
  }

  const iOSShadowOutputRanges = [
    {
      shadowOpacity: 0.15,
      height: [0, 1, 2, 4, 6, 8],
      shadowRadius: [0, 3, 6, 8, 10, 12],
    },
    {
      shadowOpacity: 0.3,
      height: [0, 1, 1, 1, 2, 4],
      shadowRadius: [0, 1, 2, 3, 3, 4],
    },
  ];

  const shadowColor = '#000';

  const { position, alignSelf, top, left, right, bottom, ...restStyle } =
    (StyleSheet.flatten(style) || {}) as ViewStyle;

  const absoluteStyles = { position, alignSelf, top, right, bottom, left };
  const sharedStyle = [{ backgroundColor }, restStyle];

  if (isAnimatedValue(elevation)) {
    const inputRange = [0, 1, 2, 3, 4, 5];

    const getStyleForAnimatedShadowLayer = (layer: 0 | 1) => {
      return {
        shadowColor,
        shadowOpacity: elevation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, iOSShadowOutputRanges[layer].shadowOpacity],
          extrapolate: 'clamp',
        }),
        shadowOffset: {
          width: 0,
          height: elevation.interpolate({
            inputRange,
            outputRange: iOSShadowOutputRanges[layer].height,
          }),
        },
        shadowRadius: elevation.interpolate({
          inputRange,
          outputRange: iOSShadowOutputRanges[layer].shadowRadius,
        }),
      };
    };

    return (
      <Animated.View
        style={[getStyleForAnimatedShadowLayer(0), absoluteStyles]}
      >
        <Animated.View style={getStyleForAnimatedShadowLayer(1)}>
          <Animated.View {...props} style={sharedStyle}>
            {children}
          </Animated.View>
        </Animated.View>
      </Animated.View>
    );
  }

  const getStyleForShadowLayer = (layer: 0 | 1) => {
    return {
      shadowColor,
      shadowOpacity: elevation ? iOSShadowOutputRanges[layer].shadowOpacity : 0,
      shadowOffset: {
        width: 0,
        height: iOSShadowOutputRanges[layer].height[elevation],
      },
      shadowRadius: iOSShadowOutputRanges[layer].shadowRadius[elevation],
    };
  };

  return (
    <Animated.View style={[getStyleForShadowLayer(0), absoluteStyles]}>
      <Animated.View style={[getStyleForShadowLayer(1)]}>
        <Animated.View {...props} style={sharedStyle}>
          {children}
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

export default Surface;
