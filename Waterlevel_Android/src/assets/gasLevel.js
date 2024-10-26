import React from 'react';
import Svg, {Path} from 'react-native-svg';

function GasIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="22"
      fill="none"
      viewBox="0 0 9 22">
      <Path
        fill="#12B293"
        fillRule="evenodd"
        d="M8.8 19.8V7.7a4.39 4.39 0 00-3.3-4.257V2.2h2.2V0H1.1v2.2h2.2v1.243A4.39 4.39 0 000 7.7v12.1A2.2 2.2 0 002.2 22h4.4a2.2 2.2 0 002.2-2.2zM4.374 5.053c-1.538 0-2.776 1.4-2.776 2.647v11.344c0 .744.55 1.151 1.1 1.151h3.455c.67 0 1.1-.498 1.1-1.151V7.7c0-1.35-1.295-2.647-2.879-2.647z"
        clipRule="evenodd"></Path>
    </Svg>
  );
}

export default GasIcon;
