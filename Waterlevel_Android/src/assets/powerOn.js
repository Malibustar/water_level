import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function PowerOnIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      fill="none"
      viewBox="0 0 41 41">
      <Circle cx="20.5" cy="20.5" r="20.5" fill="#12B293"></Circle>
      <Path
        fill="#fff"
        d="M20.007 10c-.611 0-1.111.5-1.111 1.111v8.892c0 .611.5 1.111 1.111 1.111s1.111-.5 1.111-1.111v-8.892c0-.61-.5-1.111-1.111-1.111zm5.713 3.179a1.1 1.1 0 00-.011 1.545 7.63 7.63 0 012.078 5.079c.1 4.257-3.423 7.925-7.68 7.97a7.76 7.76 0 01-7.88-7.77c0-2.045.789-3.901 2.078-5.29a1.097 1.097 0 00-.81-1.861 1.106 1.106 0 00-.79.349 9.914 9.914 0 00-2.701 6.513c-.156 5.424 4.257 10.114 9.68 10.281 5.67.178 10.326-4.368 10.326-10.003a9.882 9.882 0 00-2.69-6.791 1.117 1.117 0 00-1.6-.022z"></Path>
    </Svg>
  );
}

export default PowerOnIcon;
