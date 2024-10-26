import React from 'react';
import Svg, {Circle, Path, Rect} from 'react-native-svg';

function WaterLevel() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="175"
      height="243"
      fill="none"
      viewBox="0 0 175 243">
      <Rect
        width="173"
        height="230"
        x="1"
        y="12"
        fill="#fff"
        stroke="#12B293"
        strokeWidth="2"
        rx="19"></Rect>
      <Path
        fill="#12B293"
        fillOpacity="0.5"
        d="M24.75 93c12.5 0 17.516 5.724 30.25 6.25 14.193.586 20.054-5.747 34.25-6.25 15.768-.56 20.239 7.267 34.5 6.25 11.905-.85 17.065-6.25 29-6.25C163 93 175 99.25 175 99.25V223c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V99.25S8.75 93 24.75 93z"></Path>
      <Path
        fill="#12B293"
        fillOpacity="0.5"
        d="M21.75 99c12.5 0 20.25-6.75 33-7 14.203-.278 21.295 7 35.5 7 14.25 0 19.203-6.75 33.5-6.75 12 0 16.25 6.75 29 6.75 10.263 0 22.25-6.75 22.25-6.75V223c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V92.25S9.75 99 21.75 99z"></Path>
      <Circle
        cx="54.75"
        cy="138.75"
        r="6.75"
        fill="#fff"
        opacity="0.25"></Circle>
      <Circle cx="78" cy="148" r="5" fill="#fff" opacity="0.25"></Circle>
      <Circle cx="67" cy="163" r="5" fill="#fff" opacity="0.25"></Circle>
      <Circle cx="121.951" cy="175.5" r="5" fill="#fff" opacity="0.25"></Circle>
      <Path
        stroke="#12B293"
        strokeLinecap="round"
        strokeWidth="7"
        d="M67.5 4h40"></Path>
    </Svg>
  );
}

export default WaterLevel;
