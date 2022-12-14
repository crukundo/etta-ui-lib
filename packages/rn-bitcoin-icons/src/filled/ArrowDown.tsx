import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgArrowDown = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M12.013 2.25a.75.75 0 0 1 .75.75l-.012 16.19 5.72-5.708a.75.75 0 1 1 1.059 1.061l-7 6.988a.75.75 0 0 1-1.06 0l-7-6.988a.75.75 0 0 1 1.06-1.061l5.721 5.71L11.262 3a.75.75 0 0 1 .751-.75z"
      clipRule="evenodd"
    />
  </Svg>
);

export default SvgArrowDown;
