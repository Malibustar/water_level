import React from 'react';
import Svg, {Path} from 'react-native-svg';

function MotionIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="12"
      fill="none"
      viewBox="0 0 7 12">
      <Path
        fill="#12B293"
        d="M5.243 1.044a1.044 1.044 0 11-2.088 0 1.044 1.044 0 012.088 0zM6.785 3.841L5.014 2.542a.682.682 0 00-.403-.13c-.227.001-.592.002-.944 0a.684.684 0 00-.503.219L2.068 3.808.69 3.094a.473.473 0 10-.436.84l1.696.88c.189.098.42.058.565-.098l.372-.4-.14 2.235-1.196 1.673a.568.568 0 00-.101.257l-.374 2.878a.567.567 0 101.125.147l.356-2.738 1.327-1.855.346.085-.3 1.307a.567.567 0 000 .252l.678 3a.568.568 0 001.107-.25l-.65-2.874.446-1.628V4.467l-.08-.415.55.405v2.339a.473.473 0 00.463.482h.01c.256 0 .492-.206.497-.464V4.23c.003-.154-.044-.299-.167-.39z"></Path>
    </Svg>
  );
}

export default MotionIcon;