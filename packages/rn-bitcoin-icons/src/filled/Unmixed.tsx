import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgUnmixed = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M15.08 2.462a.75.75 0 0 1 1.06.016l3.398 3.5a.75.75 0 0 1 0 1.045l-3.398 3.5a.75.75 0 1 1-1.077-1.045l2.163-2.228H5a.75.75 0 0 1 0-1.5h12.226l-2.162-2.227a.75.75 0 0 1 .015-1.061zm0 11a.75.75 0 0 1 1.06.015l3.398 3.5a.75.75 0 0 1 0 1.045l-3.398 3.5a.75.75 0 1 1-1.077-1.045l2.163-2.227H5a.75.75 0 0 1 0-1.5h12.227l-2.164-2.228a.75.75 0 0 1 .016-1.06z"
      clipRule="evenodd"
    />
  </Svg>
);

export default SvgUnmixed;
