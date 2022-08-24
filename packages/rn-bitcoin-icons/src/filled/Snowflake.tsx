import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgSnowflake = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M12 3.25a.75.75 0 0 1 .75.75v3.175l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.28 3.281v1.954h1.925l3.295-3.295a.75.75 0 1 1 1.06 1.06l-2.234 2.235H20a.75.75 0 0 1 0 1.5h-3.175l2.205 2.205a.75.75 0 1 1-1.06 1.06l-3.266-3.265H12.75v1.925l3.28 3.28a.75.75 0 1 1-1.06 1.06l-2.22-2.219V20a.75.75 0 0 1-1.5 0v-3.204l-2.22 2.22a.75.75 0 0 1-1.06-1.06l3.28-3.281V12.75H9.296L6.03 16.016a.75.75 0 0 1-1.06-1.06l2.205-2.206H4a.75.75 0 0 1 0-1.5h3.204L4.97 9.016a.75.75 0 0 1 1.06-1.06l3.295 3.294h1.925V9.296l-3.28-3.28a.75.75 0 1 1 1.06-1.06l2.22 2.219V4a.75.75 0 0 1 .75-.75z"
      clipRule="evenodd"
    />
  </Svg>
);

export default SvgSnowflake;
