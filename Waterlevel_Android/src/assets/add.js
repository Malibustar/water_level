import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

function AddIcon() {
  return (
    <Svg
      style={styles.addBtn}
      xmlns="http://www.w3.org/2000/Svg"
      width="29"
      height="29"
      fill="none"
      viewBox="0 0 29 29">
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M14.5 14.5H2M14.5 27V14.5 27zm0-12.5V2v12.5zm0 0H27 14.5z"></Path>
    </Svg>
  );
}

export default AddIcon;

const styles = StyleSheet.create({
  addBtn: {
    marginRight: 30,
    marginLeft: 30,
  },
});
