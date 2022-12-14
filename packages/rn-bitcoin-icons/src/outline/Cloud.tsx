import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgCloud = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <Path d="M9.5 6.5a4 4 0 0 1 3.993 3.77A3 3 0 0 1 18.5 12.5a2 2 0 1 1 0 4h-12a3 3 0 0 1-.996-5.83A4 4 0 0 1 9.5 6.5z" />
  </Svg>
);

export default SvgCloud;
