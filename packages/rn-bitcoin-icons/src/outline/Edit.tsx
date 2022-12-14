import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgEdit = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <Path d="M4.5 17.207V19a.5.5 0 0 0 .5.5h1.793a.5.5 0 0 0 .353-.146l8.5-8.5-2.5-2.5-8.5 8.5a.5.5 0 0 0-.146.353zM15.09 6.41l2.5 2.5 1.203-1.203a1 1 0 0 0 0-1.414l-1.086-1.086a1 1 0 0 0-1.414 0L15.09 6.41z" />
  </Svg>
);

export default SvgEdit;
