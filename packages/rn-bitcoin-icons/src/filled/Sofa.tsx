import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgSofa = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <Path d="M3 11.5a1.5 1.5 0 0 1 3 0V14h12v-2.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5v-5z" />
    <Path d="M5.5 7.5A1.5 1.5 0 0 1 7 6h10a1.5 1.5 0 0 1 1.5 1.5v1.708A2.5 2.5 0 0 0 17 11.5V13H7v-1.5a2.5 2.5 0 0 0-1.5-2.292V7.5z" />
  </Svg>
);

export default SvgSofa;
