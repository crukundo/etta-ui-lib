import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';

const SvgCopy = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <Rect width={10} height={14} x={6} y={6} rx={1.5} />
    <Path d="M8.064 5.064A1.5 1.5 0 0 1 8.5 5h7A1.5 1.5 0 0 1 17 6.5v11a1.5 1.5 0 0 1-.064.436A1.5 1.5 0 0 0 18 16.5v-11A1.5 1.5 0 0 0 16.5 4h-7a1.5 1.5 0 0 0-1.436 1.064z" />
  </Svg>
);

export default SvgCopy;
