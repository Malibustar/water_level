import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

function AddReminderIcon() {
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
        d="M38.164 34.152c-.755-.811-2.167-2.03-2.167-6.027 0-3.035-2.128-5.465-4.998-6.06v-.815a1.25 1.25 0 10-2.498 0v.814c-2.87.596-4.998 3.026-4.998 6.061 0 3.996-1.412 5.216-2.167 6.027A1.22 1.22 0 0021 35c.004.64.507 1.25 1.254 1.25h14.992c.747 0 1.25-.61 1.254-1.25a1.22 1.22 0 00-.336-.848zm-14.526.223c.829-1.093 1.735-2.904 1.74-6.227 0-.008-.003-.015-.003-.023a4.375 4.375 0 118.75 0l-.002.023c.004 3.324.91 5.135 1.74 6.227H23.637zM29.75 40a2.5 2.5 0 002.499-2.5H27.25A2.5 2.5 0 0029.75 40z"></Path>
    </Svg>
  );
}

export default AddReminderIcon;
