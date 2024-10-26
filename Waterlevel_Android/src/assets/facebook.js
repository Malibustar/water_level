import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function Facebook() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="76"
      height="75"
      fill="none"
      viewBox="0 0 76 75"
    >
      <Path
        fill="#395185"
        fillRule="evenodd"
        d="M13.036 37.64c0 12.429 9.027 22.764 20.834 24.86V44.444h-6.25V37.5h6.25v-5.556c0-6.25 4.027-9.721 9.722-9.721 1.805 0 3.75.277 5.555.554v6.39h-3.194c-3.056 0-3.75 1.527-3.75 3.473v4.86h6.666l-1.11 6.944h-5.556V62.5c11.806-2.096 20.833-12.43 20.833-24.86 0-13.828-11.25-25.14-25-25.14s-25 11.313-25 25.14z"
        clipRule="evenodd"
      ></Path>
      <Circle
        cx="38.036"
        cy="37.5"
        r="36.5"
        stroke="#EEE"
        strokeWidth="2"
      ></Circle>
    </Svg>
  );
}

export default Facebook;
