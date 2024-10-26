import React from 'react';
import Svg, {Path} from 'react-native-svg';

function ArrowBackIcon() {
  return (
    <Svg
    style={{margin: 40}}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="12"
      fill="none"
      viewBox="0 0 22 12">
      <Path
        fill="#fff"
        d="M.504 6.437a.75.75 0 010-1.06L5.277.604a.75.75 0 111.06 
        1.06L2.095 5.907l4.242 4.243a.75.75 0 01-1.06 1.06L.504 6.437zm20.53.22h-20v-1.5h20v1.5z"></Path>
    </Svg>
  );
}

export default ArrowBackIcon;
