import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgLink = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <Path d="m7.05 11.293-2.12 2.121a4 4 0 0 0 5.657 5.657l2.828-2.828a4 4 0 0 0 0-5.657l-1.06 1.06a2.5 2.5 0 0 1 0 3.536L9.524 18.01a2.5 2.5 0 0 1-3.535-3.535l2.12-2.121-1.06-1.061z" />
    <Path d="m15.889 11.646 2.121-2.12a2.5 2.5 0 0 0-3.535-3.536l-2.829 2.828a2.5 2.5 0 0 0 0 3.536l-1.06 1.06a4 4 0 0 1 0-5.657l2.828-2.828a4 4 0 0 1 5.657 5.657l-2.121 2.121-1.061-1.06z" />
  </Svg>
);

export default SvgLink;
