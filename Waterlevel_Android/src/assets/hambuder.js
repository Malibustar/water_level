import React from 'react';
import Svg, {Path} from 'react-native-svg';

function HanburgerIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="20"
      fill="none"
      viewBox="0 0 24 20">
      <Path
        fill="#000"
        d="M0 18.579C0 19.364.637 20 1.42 20h11.443a1.422 1.422 0 000-2.843H1.421A1.42 1.42 0 000 18.58zM0 10c0 .786.526 1.421 1.173 1.421h21.226c.31 0 .609-.15.829-.416.22-.267.343-.628.343-1.005 0-.377-.123-.739-.343-1.005-.22-.267-.518-.417-.83-.417H1.174C.524 8.578 0 9.216 0 10zM1.421 2.843a1.421 1.421 0 110-2.843H18.58a1.421 1.421 0 010 2.843H1.42z"></Path>
    </Svg>
  );
}

export default HanburgerIcon;
