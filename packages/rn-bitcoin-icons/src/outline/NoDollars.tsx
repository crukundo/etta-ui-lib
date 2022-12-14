import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

const SvgNoDollars = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <Circle cx={12} cy={12} r={8.5} />
    <Path strokeLinejoin="round" d="m5.75 5.75 12.5 12.5" />
    <Path strokeLinecap="round" d="M12 6v12" />
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.567 9.37c-.17-.755-1.145-1.595-2.57-1.595-1.425 0-2.52.925-2.52 2.094 0 2.655 5.285 1.291 5.285 4.372 0 1.114-1.34 2.059-2.765 2.059s-2.411-.877-2.704-1.815"
    />
  </Svg>
);

export default SvgNoDollars;
