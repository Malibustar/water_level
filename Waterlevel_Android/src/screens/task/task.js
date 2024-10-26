import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image, ScrollView, SafeAreaView} from 'react-native';
import Style from './taskStyle';
//import Bugger from '../../assets/bugger.png';
import Bell from '../../assets/bell.png';
import bed from '../../assets/bed.png';
import activeBed from '../../assets/activebed.png';
import chair from '../../assets/chair.png';
import activechair from '../../assets/activechair.png';
import bathtop from '../../assets/bathtop.png';
import activebathtop from '../../assets/bathtopactive.png';
import alarm from '../../assets/alarm.png';
import activealarm from '../../assets/alarmactive.png';
import micro from '../../assets/micro.png';
import activemicro from '../../assets/kitchenactive.png';
import cross from '../../assets/cross.png';
import switchLogo from '../../assets/switch.png';
import Device from '../../components/device';
import Bugger from '../../components/handBugger';
const tabArray = [
  {icon: bed, name: 'Room', activeIcon: activeBed},
  {icon: chair, name: 'Palour', activeIcon: activechair},
  {icon: micro, name: 'Kitchen', activeIcon: activemicro},
  {icon: bathtop, name: 'Bathroom', activeIcon: activebathtop},
  {icon: alarm, name: 'Alarm', activeIcon: activealarm},
];

const switchArray = [
  {
    icon: switchLogo,
    mainName: 'Air Conditioner',
    devicename: 'LG AC29010',
    time: '3hrs ago',
  },
  {
    icon: switchLogo,
    mainName: 'Smart Tv',
    devicename: 'Samsung UHD 5699',
    time: '3hrs ago',
  },
  {
    icon: switchLogo,
    mainName: 'Standing Fan',
    devicename: 'Binatone SF2312',
    time: '3hrs ago',
  },
  {
    icon: switchLogo,
    mainName: 'Macbook Pro',
    devicename: 'Apple 2020 Macbook Pro 13.3',
    time: '3hrs ago',
  },
  {
    icon: switchLogo,
    mainName: 'Onyx Studio 6',
    devicename: 'H/K Onyx Studio 6',
    time: '3hrs ago',
  },
];

const Task = ({navigation}) => {
  const [active, setActive] = useState('');
  const [customclick, Setcustomclick] = useState(false);

  return (
    <SafeAreaView style={[Style.Container, Style.rowDirection]}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={Style.mainView}>
        <View style={[Style.rowDirection, Style.flexEnd]}>
          {/* <TouchableOpacity>
            <Image source={Bugger} />
          </TouchableOpacity> */}
          <Bugger route={navigation}/>
          <Text style={Style.Title}>Sweet home!</Text>
        </View>
        <View style={Style.subTitle}>
          <Text style={Style.greetingText}>Good Afternoon</Text>
          <Text style={Style.nameStyle}>Franklin</Text>
        </View>
        <View>
          <View style={[Style.rowDirection, Style.switchSWrappertyle]}>
            <View>
              <Text style={Style.devicetext}>{active}</Text>
              <Text style={Style.deviceSubtext2}>Master Switch</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => Setcustomclick(!customclick)}
                style={
                  customclick ? Style.switchActiveStyle : Style.switchStyle
                }>
                <Image source={switchLogo} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Style.connectedWrapper}>
          <Text style={Style.greetingText}>Connected Device</Text>
          <ScrollView>
            {switchArray.map((b, i) => {
              return <Device item={b} key={i} />;
            })}
          </ScrollView>
        </View>
      </View>
      <View style={Style.subView}>
        <View style={Style.sideViewWrapper}>
          <TouchableOpacity style={Style.notifStyle}>
            <Image source={Bell} />
          </TouchableOpacity>
        </View>
        <View style={Style.SideIconTabWrapper}>
          {tabArray.map((a, i) => {
            return (
              <TouchableOpacity
                onPress={() => setActive(a.name)}
                style={
                  active === a.name ? Style.activeStyleIcon : Style.sideIcon
                }
                key={i}>
                <Image source={active === a.name ? a.activeIcon : a.icon} />
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity style={Style.buttomButton}>
            <Image source={cross} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Task;
