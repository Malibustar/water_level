import React from 'react';
import Svg, {Path} from 'react-native-svg';

function HOmeWifiIcon() {
  return (
    <Svg
    style={{marginRight: 25}}
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="39"
      fill="none"
      viewBox="0 0 39 39">
      <Path
        fill="#12B293"
        d="M38.302 13.968L20.346.8a1.197 1.197 0 00-1.416 0L.974 13.968a1.197 1.197 0 101.415 1.93l.49-.358v19.893a3.446 3.446 0 003.441 3.442h26.635a3.446 3.446 0 003.442-3.442V15.54l.489.359a1.196 1.196 0 101.416-1.93z"></Path>
      <Path
        fill="#fff"
        d="M25.986 21.155c-.306 0-.613-.117-.846-.351a7.728 7.728 0 00-5.502-2.279c-2.079 0-4.033.81-5.502 2.279a1.197 1.197 0 11-1.693-1.692 10.106 10.106 0 017.195-2.981c2.719 0 5.274 1.058 7.195 2.98a1.197 1.197 0 01-.847 2.044z"></Path>
      <Path
        fill="#fff"
        d="M23.024 24.117c-.306 0-.613-.117-.846-.351a3.568 3.568 0 00-2.54-1.051c-.96 0-1.862.373-2.54 1.051a1.197 1.197 0 01-1.693-1.693 5.946 5.946 0 014.233-1.753c1.6 0 3.102.623 4.233 1.753a1.197 1.197 0 01-.847 2.044zM19.637 29.299c-.99 0-1.795-.806-1.795-1.796s.805-1.796 1.795-1.796c.99 0 1.796.806 1.796 1.796s-.805 1.796-1.796 1.796z"></Path>
    </Svg>
  );
}

export default HOmeWifiIcon;