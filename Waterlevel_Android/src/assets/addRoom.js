import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

function AddRoomIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      fill="none"
      viewBox="0 0 60 60">
      <Rect width="60" height="60" fill="#E7E7E7" rx="15"></Rect>
      <Path
        fill="#555"
        d="M37.814 23.767H26.93v6.312h-1.159v-2.145a4.59 4.59 0 00-4.585-4.585h-2.628V20h-1.674v18h1.674v-2.498l21.768.174V38H42V27.953a4.191 4.191 0 00-4.186-4.186zm-19.256 1.256h2.628a2.913 2.913 0 012.91 2.91v2.146h-5.538v-5.056zm21.768 8.979l-21.768-.175v-2.074h21.768v2.248zm0-3.923H28.605v-4.637h9.209a2.515 2.515 0 012.512 2.511v2.126z"></Path>
    </Svg>
  );
}

export default AddRoomIcon;
