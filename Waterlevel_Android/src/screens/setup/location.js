import {StyleSheet, Text, View} from 'react-native';
import HomeIcon from '../../assets/home';
import React from 'react';
import Button from '../../components/button';

const Location = ({navigation}) => {

  const alowLocationAccess = () =>{
    navigator.geolocation.getCurrentPosition()
  }
  return (
    <View style={styles.container}>
      <HomeIcon />
      <Text style={styles.wifi}>Connect your phone to your Home Wifi </Text>
      <Text style={styles.wifiDescription}>
        In order to connect your friday devices to your Home Network, your
        location will be used to automatically get the Network Name (SSID) of
        your Home Wifi
      </Text>
      <Button
        text="Allow Location Access"
        width={364}
        marginTop={70}
        action={() => {
          // handleVerification(data.email, data.userToken);
          navigation.navigate('ssid');
        }}
      />
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wifi: {
    fontSize: 30,
    color: '#555555',
    fontWeight: 'bold',
    width: 230,
    textAlign: 'center',
    marginTop: 70,
  },
  wifiDescription: {
    fontSize: 20,
    marginTop: 100,
    color: '#4F4F4F',
    textAlign: 'center',
    width: 290,
  },
});
