import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgExport = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <Path d="M11.37 10.384a1.5 1.5 0 0 0 0 2.121l.067.067a1.5 1.5 0 0 0 2.122 0l3.115-3.115c.144-.144.253-.31.326-.488V17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h7.851a1.5 1.5 0 0 0-.366.269l-3.114 3.115z" />
    <Path
      fillRule="evenodd"
      d="M19.218 4.782a.5.5 0 0 1 0 .708l-6.364 6.364a.5.5 0 0 1-.708-.707l6.364-6.365a.5.5 0 0 1 .707 0z"
      clipRule="evenodd"
    />
    <Path
      fillRule="evenodd"
      d="M14 4.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5h-4.5a.5.5 0 0 1-.5-.5z"
      clipRule="evenodd"
    />
  </Svg>
);

export default SvgExport;
