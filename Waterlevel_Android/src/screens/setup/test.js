import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FridaySwitchProIcon from '../../assets/fridayProIcon';
import TemperatureIcon from '../../assets/temperature';
import HumidityIcon from '../../assets/humidity';
import LightIcon from '../../assets/light';
import {ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Button from '../../components/button';
import AirIcon from '../../assets/air';
import PowerOffIcon from '../../assets/powerOff';
import PowerOnIcon from '../../assets/powerOn';
import ACIcon from '../../assets/AC';

const Test = ({navigation}) => {
  const temperature = <TemperatureIcon />;
  const humidity = <HumidityIcon />;
  const light = <LightIcon />;

  const sensors = [
    {icon: temperature, text: 'Temperature', value: '29%'},
    {icon: humidity, text: 'Humidity', value: '57%'},
    {icon: light, text: 'Light (UV )', value: '75%'},
  ];
  const [device, setDevice] = useState(true);
  return (
    <ScrollView
      contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
      style={styles.container}>
      <View style={styles.innerCon}>
        <Text style={styles.manualConnect}>Friday Switch Pro</Text>
        <FridaySwitchProIcon />
        <Text style={styles.wifiDesc}>
          In order to connect your friday devices to your Home Network, your
          location will be used to automatically get the Network Name (SSID) of
          your Home Wifi
        </Text>
        <View style={styles.textCon}>
          <Text style={styles.greenText}>Sensors</Text>
          <Text style={styles.greenText}>Initializing</Text>
        </View>
        <View style={styles.scroll}>
          {sensors.map((a, i) => {
            return (
              <TouchableOpacity key={i} style={styles.listItem}>
                <View style={styles.idWrapper}>
                  <View style={styles.iconWrapper}>{a.icon}</View>
                  <Text style={styles.listText}>{a.text}</Text>
                </View>
                <View style={styles.valueWrapper}>
                  <Text style={{color: '#47C3AB', fontWeight: 'bold'}}>
                    {a.value}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        {/* <AirIcon /> */}
        <View style={styles.devicePreview}>
          <ACIcon />
          <Text
            style={{
              color: '#4F4F4F',
              fontSize: 20,
              fontWeight: 'bold',
              marginRight: 120,
            }}>
            Air Conditioner
          </Text>
          <TouchableOpacity
            onPress={() => {
              setDevice(!device);
            }}>
            {device ? <PowerOnIcon /> : <PowerOffIcon />}
          </TouchableOpacity>
        </View>
        <Button
          text="Finish"
          width={400}
          marginTop={0}
          action={() => {
            // handleVerification(data.email, data.userToken);
            navigation.navigate('addRoom');
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 30,
    color: '#12B293',
    textAlign: 'center',
    // width: 289,
    // marginBottom: 30
  },
  wifiDesc: {
    fontSize: 20,
    marginTop: 50,
    color: '#4F4F4F',
    textAlign: 'center',
    width: 289,
    lineHeight: 30,
  },

  scroll: {
    // height: '65%',
    width: '90%',
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
    // marginTop: 5,
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
    width: '80%',
  },
  devicePreview: {
    width: '90%',
    height: 80,
    borderRadius: 20,
    backgroundColor: '#E7F7F4',
    margin: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
  },
  idWrapper: {
    width: '50%',
    // borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueWrapper: {
    // borderWidth: 1,
    width: '50%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textCon: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    textAlign: 'justify',
    marginTop: 30,
  },
});
