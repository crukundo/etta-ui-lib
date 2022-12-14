import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgSofa = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <Path d="M3.5 11.5a1 1 0 1 1 2 0v3h13v-3a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-5z" />
    <Path d="M6 8a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 18 8v.708A2.5 2.5 0 0 0 16.5 11v1.5h-9V11A2.5 2.5 0 0 0 6 8.708V8z" />
  </Svg>
);

export default SvgSofa;
