import React from 'react';
import Svg, {Path} from 'react-native-svg';

function TemperatureIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="22"
      fill="none"
      viewBox="0 0 13 22">
      <Path
        fill="#12B293"
        d="M7.001 14.28V9.5a1 1 0 00-2 0v4.78a2 2 0 00-1 1.72 2 2 0 004 0 2 2 0 00-1-1.72zm3.5-2.28V4.5a4.5 4.5 0 00-9 0V12a6 6 0 003.21 9.83 7 7 0 001.29.17 6 6 0 004.5-10zm-2 7.07a4.01 4.01 0 11-5.32-6 1 1 0 00.3-.71V4.5a2.5 2.5 0 115 0v7.94a1 1 0 00.3.71 4 4 0 01-.28 6v-.08z"></Path>
    </Svg>
  );
}

export default TemperatureIcon;
