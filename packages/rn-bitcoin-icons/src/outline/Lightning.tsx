import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgLightning = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <Path d="m18.496 10.709-8.636 8.88c-.24.246-.638-.039-.482-.345l3.074-6.066a.3.3 0 0 0-.268-.436H5.718a.3.3 0 0 1-.214-.51l8.01-8.115c.232-.235.618.023.489.328L11.706 9.86a.3.3 0 0 0 .28.417l6.291-.078a.3.3 0 0 1 .22.509z" />
  </Svg>
);

export default SvgLightning;
