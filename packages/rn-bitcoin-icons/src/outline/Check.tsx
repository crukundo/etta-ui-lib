import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgCheck = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 13.295 10.913 18 18 6"
    />
  </Svg>
);

export default SvgCheck;
