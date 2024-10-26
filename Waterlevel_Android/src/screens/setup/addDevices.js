import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FireIcon from '../../assets/fire';
import GasIcon from '../../assets/gasLevel';
import MotionIcon from '../../assets/motion';
import WaterLevelIcon from '../../assets/waterlevel';
import TemperatureIcon from '../../assets/temperature';
import HumidityIcon from '../../assets/humidity';
import LightIcon from '../../assets/light';
import ProximityIcon from '../../assets/proximity';
import SecurityCameraIcon from '../../assets/securityCamera';
import DoorLock from '../../assets/doorLock';
import AlarmIcon from '../../assets/alarm';
import {ScrollView} from 'react-native';
import Button from '../../components/button';
import { TouchableOpacity } from 'react-native';

const AddDevices = () => {
  const water = <WaterLevelIcon />;
  const gas = <GasIcon />;
  const motion = <MotionIcon />;
  const fire = <FireIcon />;
  const temperature = <TemperatureIcon />;
  const humidity = <HumidityIcon />;
  const light = <LightIcon />;
  const proximity = <ProximityIcon />;
  const alarm = <AlarmIcon />;
  const camera = <SecurityCameraIcon />;
  const doorLook = <DoorLock />;

  const devices = [
    {icon: water, text: 'Water Level'},
    {icon: gas, text: 'Gas Level'},
    {icon: motion, text: 'Motion'},
    {icon: fire, text: 'Fire/Smoke'},
    {icon: temperature, text: 'Temperature'},
    {icon: humidity, text: 'Humidity'},
    {icon: light, text: 'Light (UV )'},
    {icon: proximity, text: 'Proximity'},
    {icon: alarm, text: 'Alarm (Sound/Light)'},
    {icon: camera, text: 'Security Camera'},
    {icon: doorLook, text: 'Door Lock'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.greenText}>Add Devices</Text>
        <Text style={styles.smallText}>Sensors</Text>
        <ScrollView style={styles.scroll}>
          {devices.map((a, i) => {
            return (
              <TouchableOpacity key={i} style={styles.listItem}>
                <View style={styles.iconWrapper}>{a.icon}</View>
                <Text style={styles.listText}>{a.text}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <Button
          text="Continue"
          action={() => {
            // handleVerification(data.email, data.userToken);
            // navigation.navigate('addDevices');
          }}
        />
      </View>
    </View>
  );
};

export default AddDevices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '100%',
    backgroundColor: '#FFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: '90%',
  },
  greenText: {
    // fontFamily: 'Montserrat',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#12B293',
    // marginTop: 0,
  },
  smallText: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    padding: 15,
    borderBottomWidth: 0.5,
  },
  listText: {
    marginLeft: 70,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 14,
  },
  scroll: {
    height: '65%',
    marginBottom: '10%',
  },
  iconWrapper: {
    // borderWidth: 1, 
    // height: 50,
    width: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
