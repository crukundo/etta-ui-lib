import * as React from 'react';
import Svg, { Ellipse, Circle } from 'react-native-svg';
const SvgVisible = (props) => (<Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <Ellipse cx={12} cy={12} rx={8.5} ry={4.5}/>
    <Circle cx={12} cy={12} r={1.5}/>
  </Svg>);
export default SvgVisible;
