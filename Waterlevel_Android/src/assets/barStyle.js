import React from 'react';
import Svg, { Rect } from 'react-native-svg';

function BarStyleIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="4"
      fill="none"
      viewBox="0 0 50 4">
      <Rect width="50" height="4" fill="#000" rx="2"></Rect>
    </Svg>
  );
}

export default BarStyleIcon;
