import React from 'react';
import Svg, {Path} from 'react-native-svg';

function ProximityIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      fill="none"
      viewBox="0 0 16 17">
      <Path
        stroke="#12B293"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M3 8.5v.013"></Path>
      <Path
        stroke="#12B293"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7.75 4.75a5.303 5.303 0 010 7.5M11.5 1a10.606 10.606 0 010 15"></Path>
    </Svg>
  );
}

export default ProximityIcon;
