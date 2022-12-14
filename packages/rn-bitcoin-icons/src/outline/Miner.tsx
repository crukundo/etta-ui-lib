import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgMiner = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <Path d="M6.413 18.406a1.197 1.197 0 0 1 0-1.812A8.467 8.467 0 0 1 12 14.5c2.139 0 4.093.79 5.587 2.094a1.197 1.197 0 0 1 0 1.812A8.467 8.467 0 0 1 12 20.5a8.468 8.468 0 0 1-5.587-2.094zM8.521 8.5c.194 2.25 1.677 4 3.479 4s3.285-1.75 3.479-4H8.52z" />
    <Path
      d="M16 8c0 .169-.008.336-.024.5H8.024A5.113 5.113 0 0 1 8 8c0-2.485 1.79-4.5 4-4.5s4 2.015 4 4.5zm-4-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      clipRule="evenodd"
    />
    <Path strokeLinecap="round" strokeLinejoin="round" d="M7 8.5h10" />
  </Svg>
);

export default SvgMiner;
