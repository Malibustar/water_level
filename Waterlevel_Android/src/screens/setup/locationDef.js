import {StyleSheet, Text, View} from 'react-native';
import FridayHandIcon from '../../assets/fridayhand';
import FridayConnectIcon from '../../assets/fridayWifi';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import ArrowLeftIcon from '../../assets/arrowRight';
import ArrowBackIcon from '../../assets/arrowBack';

const LocationDef = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FridayConnectIcon />
      <FridayHandIcon />
      <Text style={styles.wifi}>Connect to device</Text>

      <Text style={styles.wifiDescription}>
        In order to connect your friday devices to your Home Network, your
        location will be used to automatically get the Network Name (SSID) of
        your Home Wifi
      </Text>

      <TouchableOpacity
        onPress={() => {
          // setIsModalVisible(false);
          navigation.navigate('qrscanner');
        }}
        style={[styles.Button, {width: '90%'}]}>
        {/* <ArrowLeftIcon /> */}
        {/* <ArrowBackIcon /> */}
        <Text
          style={{
            color: '#fff',
            fontSize: 14,
            fontWeight: 'bold',
            alignSelf: 'center',
            // marginLeft: 120,
          }}>
          Connect
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationDef;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wifiDescription: {
    fontSize: 20,
    marginTop: 50,
    color: '#4F4F4F',
    textAlign: 'center',
    width: 289,
  },
  Button: {
    width: '100%',
    height: 70,
    backgroundColor: '#12B293',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 70,
  },
  wifi: {
    fontSize: 30,
    color: '#555555',
    fontWeight: 'bold',
    width: 270,
    textAlign: 'center',
    marginTop: 50,
    lineHeight: 40,
  },
});
