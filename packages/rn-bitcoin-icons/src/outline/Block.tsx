import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgBlock = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <Path d="M20.54 8.676v6.876a.694.694 0 0 1-.355.644l-7.132 4.024a2.096 2.096 0 0 1-2.056.002L3.82 16.197a.694.694 0 0 1-.355-.66V8.694a.694.694 0 0 1 .345-.654l7.156-4.172a2.097 2.097 0 0 1 2.117.002l7.112 4.17a.693.693 0 0 1 .344.636z" />
    <Path d="M3.82 9.253a.699.699 0 0 1-.01-1.213l7.156-4.172a2.097 2.097 0 0 1 2.117.002l7.112 4.17a.699.699 0 0 1-.01 1.212l-7.132 4.024a2.096 2.096 0 0 1-2.056.003L3.82 9.253z" />
  </Svg>
);

export default SvgBlock;
