import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FridaySwitchProIcon from '../../assets/fridayProIcon';
import TemperatureIcon from '../../assets/temperature';
import HumidityIcon from '../../assets/humidity';
import LightIcon from '../../assets/light';
import {ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Button from '../../components/button';

const FridaySwitchPro = ({navigation}) => {
  const temperature = <TemperatureIcon />;
  const humidity = <HumidityIcon />;
  const light = <LightIcon />;

  const sensors = [
    {icon: temperature, text: 'Temperature'},
    {icon: humidity, text: 'Humidity'},
    {icon: light, text: 'Light (UV )'},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.innerCon}>
        <Text style={styles.manualConnect}>Friday Switch Pro</Text>
        <FridaySwitchProIcon />
        <Text style={styles.wifiDesc}>
          In order to connect your friday devices to your Home Network, your
          location will be used to automatically get the Network Name (SSID) of
          your Home Wifi
        </Text>
        <Text style={styles.greenText}>Sensors</Text>
        <View style={styles.scroll}>
          {sensors.map((a, i) => {
            return (
              <TouchableOpacity key={i} style={styles.listItem}>
                <View style={styles.iconWrapper}>{a.icon}</View>
                <Text style={styles.listText}>{a.text}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Button
          text="Add device to a room"
          width={364}
          marginTop={70}
          action={() => {
            // handleVerification(data.email, data.userToken);
            navigation.navigate('mac');
          }}
        />
      </View>
    </View>
  );
};

export default FridaySwitchPro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
  },
  innerCon: {
    // borderWidth: 1,
    width: '90%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  manualConnect: {
    fontSize: 20,
    marginTop: 5,
    color: '#12B293',
    textAlign: 'center',
    // width: 289,
  },
  wifiDesc: {
    fontSize: 20,
    marginTop: 70,
    color: '#4F4F4F',
    textAlign: 'center',
    width: 289,
    lineHeight: 30,
  },

  scroll: {
    // height: '65%',
    width: '80%',
    // marginBottom: '10%',
  },
  iconWrapper: {
    // borderWidth: 1,
    // height: 50,
    width: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listText: {
    marginLeft: 50,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 14,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    padding: 15,
    borderBottomWidth: 0.5,
  },
  greenText: {
    // fontFamily: 'Montserrat',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#12B293',
    // marginTop: 0,
    // borderWidth: 1,
    width: '80%',
    marginTop: 50,
  },
});
