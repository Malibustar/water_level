import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function SuccessIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="115"
      height="114"
      fill="none"
      viewBox="0 0 115 114">
      <Circle cx="57.5" cy="57.075" r="56.641" fill="#E7F7F4"></Circle>
      <Circle cx="57.5" cy="57.074" r="34.554" fill="#12B293"></Circle>
      <Path
        fill="#fff"
        d="M51.394 65.145l-8.438-8.438-3.624 3.623 12.062 12.063L76.27 47.516l-3.624-3.623-21.25 21.252z"></Path>
    </Svg>
  );
}

export default SuccessIcon;
