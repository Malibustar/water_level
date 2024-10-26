import React from 'react';
import Svg, {Path} from 'react-native-svg';

function GreenWifiIcon() {
  return (
    <Svg style={{margin: 15}}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="26"
      fill="none"
      viewBox="0 0 32 26">
      <Path
        fill="#12B293"
        d="M15.79.285C9.145.285 4.145 2.72 0 5.851l15.79 19.434L31.578 5.877C27.434 2.746 22.434.285 15.789.285zm1.315 17.105h-2.631V9.496h2.631v7.894zM14.474 6.864V4.233h2.631v2.631h-2.631z"></Path>
    </Svg>
  );
}

export default GreenWifiIcon;
