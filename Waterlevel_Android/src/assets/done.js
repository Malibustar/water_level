import React from 'react';
import Svg, {Path} from 'react-native-svg';

function DoneIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 25 25">
      <Path
        fill="#12B293"
        d="M22.984.284h-20a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2v-20a2 2 0 00-2-2zm-12 17.5l-5-4.957 1.59-1.543 3.41 3.346 7.41-7.346 1.59 1.577-9 8.923z"></Path>
    </Svg>
  );
}

export default DoneIcon;
