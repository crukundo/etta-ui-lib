import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgFlipVertical = (props: SvgProps) => (
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
      d="M7.5 18V5M4 15.602 7.5 19l3.5-3.398M16.5 6v13M13 8.398 16.5 5 20 8.398"
    />
  </Svg>
);

export default SvgFlipVertical;
