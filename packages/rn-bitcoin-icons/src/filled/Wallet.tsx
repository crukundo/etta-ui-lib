import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgWallet = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M12 8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-4z"
      clipRule="evenodd"
    />
    <Path
      fillRule="evenodd"
      d="M5.5 6A1.5 1.5 0 0 0 4 7.5v9A1.5 1.5 0 0 0 5.5 18h10a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 15.5 6h-10zm2 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      clipRule="evenodd"
    />
  </Svg>
);

export default SvgWallet;
