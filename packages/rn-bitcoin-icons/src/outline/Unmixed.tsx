import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgUnmixed = (props: SvgProps) => (
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
      d="M18 17.5H5M15.602 21 19 17.5 15.602 14M18 6.5H5M15.602 10 19 6.5 15.602 3"
    />
  </Svg>
);

export default SvgUnmixed;
