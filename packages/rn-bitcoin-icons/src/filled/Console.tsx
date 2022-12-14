import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgConsole = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M3.22 4.47a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06-1.06L9.69 12 3.22 5.53a.75.75 0 0 1 0-1.06zM9.25 19a.75.75 0 0 1 .75-.75h10.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1-.75-.75z"
      clipRule="evenodd"
    />
  </Svg>
);

export default SvgConsole;
