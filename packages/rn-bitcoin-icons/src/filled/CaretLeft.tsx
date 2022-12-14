import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgCaretLeft = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M14.601 4.47a.75.75 0 0 1 0 1.06l-6.364 6.364a.25.25 0 0 0 0 .354l6.364 6.364a.75.75 0 0 1-1.06 1.06l-6.364-6.364a1.75 1.75 0 0 1 0-2.474L13.54 4.47a.75.75 0 0 1 1.06 0z"
      clipRule="evenodd"
    />
  </Svg>
);

export default SvgCaretLeft;
