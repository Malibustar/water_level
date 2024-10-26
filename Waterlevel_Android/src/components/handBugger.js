import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Bugger from '../assets/bugger.png';
import HanburgerIcon from '../assets/hambuder';

const HandBugger = ({route}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => route.openDrawer()}>
        <HanburgerIcon />
      </TouchableOpacity>
    </View>
  );
};
export default HandBugger;
