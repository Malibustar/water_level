import React from 'react';
import Svg, {Path} from 'react-native-svg';

function BellIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="22"
      fill="none"
      viewBox="0 0 20 22">
      <Path
        fill="#555"
        d="M20 18H0v-2h1V9.031C1 4.043 5.03 0 10 0s9 4.043 9 9.031V16h1v2zM7.5 19h5a2.5 2.5 0 01-5 0z"></Path>
    </Svg>
  );
}

export default BellIcon;
