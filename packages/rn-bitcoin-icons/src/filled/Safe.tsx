import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const SvgSafe = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M7.5 7.5v9h9v-9h-9zM12 14c.37 0 .718-.101 1.016-.277l1.13 1.13a.5.5 0 0 0 .708-.707l-1.13-1.13a2 2 0 0 0-.001-2.032l1.13-1.13a.5.5 0 0 0-.707-.708l-1.13 1.13A1.991 1.991 0 0 0 12 10c-.37 0-.718.101-1.016.277l-1.13-1.13a.5.5 0 1 0-.708.707l1.13 1.13A1.991 1.991 0 0 0 10 12c0 .37.101.718.277 1.016l-1.13 1.13a.5.5 0 0 0 .707.708l1.13-1.13A2 2 0 0 0 12 14z"
      clipRule="evenodd"
    />
    <Path
      fillRule="evenodd"
      d="M5 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v11.935a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6zm1.5 1a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V7z"
      clipRule="evenodd"
    />
    <Circle cx={12} cy={12} r={1} />
    <Path d="M7 19h2v.578a.422.422 0 0 1-.422.422H7.422A.422.422 0 0 1 7 19.578V19zm8 0h2v.578a.422.422 0 0 1-.422.422h-1.156a.422.422 0 0 1-.422-.422V19z" />
  </Svg>
);

export default SvgSafe;
