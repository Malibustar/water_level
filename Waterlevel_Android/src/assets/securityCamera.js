import React from 'react';
import Svg, {Path} from 'react-native-svg';

function SecurityCameraIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22">
      <Path
        stroke="#12B293"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.889 1H2.11C1.497 1 1 1.497 1 2.111v2.222c0 .614.497 1.111 1.111 1.111H19.89c.614 0 1.111-.497 1.111-1.11V2.11C21 1.497 20.503 1 19.889 1zM11 17.667a4.444 4.444 0 100-8.889 4.444 4.444 0 000 8.889z"></Path>
      <Path
        stroke="#12B293"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18.778 5.444v7.778a7.778 7.778 0 01-15.556 0V5.444M11 13.222h.011"></Path>
    </Svg>
  );
}

export default SecurityCameraIcon;
