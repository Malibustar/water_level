import React from 'react';
import Svg, {Path} from 'react-native-svg';

function DoorLock() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="21"
      fill="none"
      viewBox="0 0 16 21">
      <Path
        fill="#12B293"
        d="M14 7h-1V5c0-2.76-2.24-5-5-5S3 2.24 3 5v2H2C.9 7 0 7.9 0 9v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM5 5c0-1.66 1.34-3 3-3s3 1.34 3 3v2H5V5zm9 14H2V9h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></Path>
    </Svg>
  );
}

export default DoorLock;
