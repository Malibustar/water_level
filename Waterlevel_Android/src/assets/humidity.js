import React from 'react';
import Svg, {Path} from 'react-native-svg';

function HumidityIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="20"
      fill="none"
      viewBox="0 0 29 20">
      <Path
        fill="#12B293"
        d="M21.503 20h-15a6.496 6.496 0 01-1.3-12.861 8.994 8.994 0 0117.6 0A6.496 6.496 0 0121.503 20zm-7.5-18a7 7 0 00-6.941 6.146l-.1.812-.815.064A4.496 4.496 0 006.503 18h15a4.496 4.496 0 00.356-8.98l-.815-.063-.099-.812A7.002 7.002 0 0014.003 2z"></Path>
    </Svg>
  );
}

export default HumidityIcon;
