import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgTrash = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M5.25 6.91A.75.75 0 0 1 6 6.16h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75z"
      clipRule="evenodd"
    />
    <Path
      fillRule="evenodd"
      d="M11.333 4.75c-.69 0-1.25.56-1.25 1.25v.91h-1.5V6a2.75 2.75 0 0 1 2.75-2.75h1.334A2.75 2.75 0 0 1 15.417 6v.91h-1.5V6c0-.69-.56-1.25-1.25-1.25h-1.334zM6 6.91 8 20h8l2-13.09H6zm6.5 3.636a.5.5 0 1 0-1 0v5.818a.5.5 0 1 0 1 0v-5.819zm-3.224-.5a.476.476 0 0 1 .55.423l.666 5.818a.525.525 0 0 1-.435.576.477.477 0 0 1-.549-.423l-.667-5.818a.525.525 0 0 1 .435-.575zm5.883.576a.525.525 0 0 0-.435-.575.476.476 0 0 0-.55.422l-.666 5.818a.525.525 0 0 0 .435.576.476.476 0 0 0 .549-.423l.666-5.818z"
      clipRule="evenodd"
    />
  </Svg>
);

export default SvgTrash;
