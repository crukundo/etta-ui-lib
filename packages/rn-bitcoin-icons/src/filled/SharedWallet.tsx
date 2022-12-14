import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgSharedWallet = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M5 4.5A1.5 1.5 0 0 1 6.5 3h8A1.5 1.5 0 0 1 16 4.5v4.504h-1V4.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5H11v1H6.5A1.5 1.5 0 0 1 5 16.5v-12z"
      clipRule="evenodd"
    />
    <Path d="M6 15h5v2H6z" />
    <Path
      fillRule="evenodd"
      d="M12 11.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-8zm1.5-.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-4z"
      clipRule="evenodd"
    />
    <Path d="M12.5 18.5h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1z" />
  </Svg>
);

export default SvgSharedWallet;
