import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

function AddTaskIcon() {
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
        fillRule="evenodd"
        d="M28 22h10a1 1 0 010 2H28a1 1 0 010-2zm0 7h10a1 1 0 010 2H28a1 1 0 010-2zm0 7h10a1 1 0 010 2H28a1 1 0 010-2zm-6-11a2 2 0 110-4 2 2 0 010 4zm0 7a2 2 0 110-4 2 2 0 010 4zm0 7a2 2 0 110-4 2 2 0 010 4z"
        clipRule="evenodd"></Path>
    </Svg>
  );
}

export default AddTaskIcon;
