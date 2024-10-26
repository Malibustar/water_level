import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from './buttomModalStyle';
import reminderIcon from '../../assets/bar.png';
import notiIcon from '../../assets/bell2.png';
import room from '../../assets/bed.png';
import close from '../../assets/close.png';

const IconMap = [
  {name: 'task', icon: reminderIcon, title: 'Add a new task'},
  {name: 'reminder', icon: notiIcon, title: 'Add a reminder'},
  {name: 'room', icon: room, title: 'Add a new room'},
];


const ButtomModal = ({activeState, setActive}) => {
  return (
    <TouchableOpacity onPress={() => setActive(false)} style={Style.Container}>
      <View style={Style.mainWrapper}>
        {IconMap.map((index, i) => {
          return (
            <View style={Style.iconWrappa} key={i}>
              <TouchableOpacity style={Style.iconstyle}>
                <Image source={index.icon} />
              </TouchableOpacity>
              <Text style={Style.textStyle}>{index.title}</Text>
            </View>
          );
        })}
        {/* <TouchableOpacity onPress={()=>setActive(false)}  style={Style.buttomButton}>
            <Image source={close} />
            </TouchableOpacity> */}
      </View>
    </TouchableOpacity>
  );
};

export default ButtomModal;
