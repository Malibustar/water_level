import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Style from './swipeModalStyle';
import reminderIcon from '../../assets/bar.png';
import notiIcon from '../../assets/bell2.png';
import room from '../../assets/bed.png';

const IconMap = [
  {
    name: 'task',
    icon: reminderIcon,
    title: 'Add a new task',
    description:
      'Tell Friday to turn on or turn off a device at the desired time to save energy',
  },
  {
    name: 'reminder',
    icon: notiIcon,
    title: 'Add a reminder',
    description:
      'Create alarms for personal tasks. You can link Tasks and Reminder together',
  },
  {
    name: 'room',
    icon: room,
    title: 'Add a new room',
    description: ' ',
  },
];

export default function SwipeModal({setActive, visible}) {
  // const [isVisible, setIsVisible] = useState(visible);

  return (
    <View>
      <Modal
        isVisible={visible}
        onBackdropPress={() => {
          // setIsVisible(false);
          setActive(false);
          console.log('check from swipe');
        }}
        swipeDirection="down"
        //swipeDirection={["up", "down", "left", "right"]}
        // onSwipeComplete={(e) => {
        //   setIsVisible(false);
        // }}
        // onSwipe={setActive(false)}
        style={{justifyContent: 'flex-end', marginBottom: '40%'}}>
        <View style={{backgroundColor: 'white'}}>
          <View style={Style.topLine}></View>
          <TouchableOpacity
            // onPress={() => setIsVisible(false)}
            style={Style.Container}>
            <View style={Style.mainWrapper}>
              {IconMap.map((index, i) => {
                return (
                  <View style={Style.iconWrappa} key={i}>
                    <TouchableOpacity style={Style.iconstyle}>
                      <Image source={index.icon} />
                    </TouchableOpacity>
                    <Text style={Style.textStyle}>{index.title}</Text>
                    {/* <Text >{index.description}</Text> */}
                  </View>
                );
              })}
              {/* <TouchableOpacity onPress={()=>setActive(false)}  style={Style.buttomButton}>
            <Image source={room} />
            </TouchableOpacity> */}
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
