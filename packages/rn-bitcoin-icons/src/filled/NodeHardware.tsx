import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgNodeHardware = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M21 9.884a.73.73 0 0 0-.364-.646l-7.494-4.395a2.21 2.21 0 0 0-2.23-.003L3.368 9.237a.73.73 0 0 0-.365.647H3v4.43h.004a.73.73 0 0 0 .376.621l7.563 4.243a2.21 2.21 0 0 0 2.167-.003l7.515-4.24a.73.73 0 0 0 .375-.62V9.884zm-16.236.563a.375.375 0 1 0-.368.654l6.359 3.587a2.585 2.585 0 0 0 2.551-.006l6.278-3.582a.375.375 0 0 0-.372-.652l-6.278 3.583c-.56.32-1.248.322-1.81.004l-6.36-3.588z"
      clipRule="evenodd"
    />
  </Svg>
);

export default SvgNodeHardware;
