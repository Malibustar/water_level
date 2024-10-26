import React from 'react';
import Svg, {Path} from 'react-native-svg';

function ArrowUpIcon() {
  return (
    <Svg
    style={{margin: 30}}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="13"
      fill="none"
      viewBox="0 0 22 13">
      <Path
        fill="#12B293"
        d="M3.12 12.42l7.5-7.5 7.5 7.5 3-1.5L10.62.42.12 10.92l3 1.5z"></Path>
    </Svg>
  );
}

export default ArrowUpIcon;
