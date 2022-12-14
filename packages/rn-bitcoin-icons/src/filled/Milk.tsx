import * as React from 'react';
import Svg, { SvgProps, Path, Rect } from 'react-native-svg';

const SvgMilk = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <Path d="M14.278 4.977a.946.946 0 0 0-.832-.477h-2.858a.96.96 0 0 0-.861.518c-.13.253-.296.589-.48.982h5.569a21.574 21.574 0 0 0-.538-1.023z" />
    <Path
      fillRule="evenodd"
      d="M7.5 12c0-1.542.66-3.48 1.302-5h6.475c.616 1.43 1.223 3.275 1.223 5v7a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-7zM9 12a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6A.5.5 0 0 0 9 12z"
      clipRule="evenodd"
    />
    <Rect width={7} height={3} x={8.5} y={3} rx={1} />
  </Svg>
);

export default SvgMilk;
