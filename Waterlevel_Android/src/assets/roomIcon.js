import React from 'react';
import Svg, {Path} from 'react-native-svg';

function RoomIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20">
      <Path
        fill="#B8B8B8"
        d="M17.14 9.45V7c0-1.1-.9-2-2-2h-3.35c-.37 0-.72.12-1 .32-.28-.2-.63-.32-1-.32H6.44c-1.1 0-2 .9-2 2v2.45c-.4.46-.65 1.06-.65 1.72V15h1.5v-1.5h11V15h1.5v-3.83c0-.66-.25-1.26-.65-1.72zm-1.6-.95h-4v-2h4v2zm-9.5-2h4v2h-4v-2zM16.29 12h-11v-1c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v1zm2.5-10v16h-16V2h16zm0-2h-16c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"></Path>
    </Svg>
  );
}

export default RoomIcon;
