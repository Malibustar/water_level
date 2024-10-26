import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import FridayConnectIcon from '../../assets/fridayWifi';

import React, {useState, useEffect} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modal';
import SuccessIcon from '../../assets/success';
import GreenWifiIcon from '../../assets/greenWifi';

import Smartconfig from 'react-native-smartconfig-esp';
import {NetworkInfo} from 'react-native-network-info';

const Ssid = ({navigation}) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidEmail: true,
    isValidPassword: true,
  });

  //Initialize States Onload
  useEffect(() => {
    requestPermission();

    return () => {
      //cleanup
    };
  }, []);

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  //TO -DO request persmission for ios
  async function requestPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Wifi networks',
          message: 'We need your permission in order to find wifi networks',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Thank you for your permission! :)');
      } else {
        console.log(
          'You will not able to retrieve wifi available networks list',
        );
      }
    } catch (err) {
      console.warn(err);
    }
  }

  const [wifiSSID, setWifiSSID] = useState(() => {
    NetworkInfo.getSSID().then((ssid) => {
      console.log(ssid);
      setWifiSSID(ssid);
    });
  });
  const [wifiPassword, setWifiPassword] = useState('null');
  const [isSendingWifiData, setIsSendingWifiData] = useState(false);
  const [checkWifiChannel, setCheckWifiChannel] = useState(() => {
    NetworkInfo.getFrequency().then((frequency) => {
      setCheckWifiChannel(frequency.toString());
    });
  });

  // const handlePasswordChange = (val) => {
  //   if (val.trim().length >= 6) {
  //     setData({
  //       ...data,
  //       password: val,
  //       isValidPassword: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       password: val,
  //       isValidPassword: false,
  //     });
  //   }
  // };

  const configureNetwork = () => {
    console.log('fucntion ran');

    console.log('sending ssid = ' + wifiSSID + ', pass = ' + wifiPassword);

    if (wifiPassword == null || wifiSSID == null) {
      console.log('Cannot use null as input');
      Alert.alert('Unable to can', 'ssid and password cannot be null', [
        {text: 'Ok', onPress: () => {}},
      ]);
      return;
    }

    setIsSendingWifiData(true);
    Smartconfig.start({
      type: 'esptouch', //or airkiss, now doesn't not effect
      ssid: wifiSSID,
      bssid: '0', //'filter-device', //"" if not need to filter (don't use null)
      password: wifiPassword,
      timeout: 50000, //now support (default 30000)
      taskCount: 1, // now support (default 1)
      cast: 'multicast', //broadcast or multicast
    })
      .then(function (results) {
        //Array of device success do smartconfig
        console.log(results);
        // Alert.alert('Connection Was Succesful', 'Sent the wifi data', [
        //   {text: 'Ok', onPress: () => {}},
        // ]);
        setIsModalVisible(true);

        // Alert.alert("Connection Successful", results.map(a =>{
        //   return(
        //     {names: a.bssid , pv4:a.ipv4}
        //   );
        // }), [{text: "Ok"}]);
        setIsSendingWifiData(false);
        console.log('sending data');
        /*[
      {
        'bssid': 'device-bssi1', //device bssid
        'ipv4': '192.168.1.11' //local ip address
      },
      {
        'bssid': 'device-bssi2', //device bssid
        'ipv4': '192.168.1.12' //local ip address
      },
      ...
    ]*/
      })
      .catch(function (error) {
        setIsSendingWifiData(false);
        //Alert.alert(error);
        console.log(error);
        Alert.alert('Unable to can', error.message, [
          {text: 'Ok', onPress: () => {}},
        ]);
      })
      .then((error) => {
        //
      });
  };

  const cancelNetworkConfiguration = () => {
    setIsSendingWifiData(false);
    Smartconfig.stop();
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      style={styles.container}>
      <View style={styles.innerContainer}>
        <FridayConnectIcon />
        <Text style={styles.wifi}>
          Connect a Friday Device to your Home Wifi
        </Text>
        <Text style={styles.wifiDescription}>
          In order to use Friday devices online, you need to connect them to
          your Home WiFi. Why?
        </Text>
        <View>
          <ActivityIndicator
            size="large"
            color="#12B293"
            animating={isSendingWifiData}
          />
        </View>

        <View style={[styles.input_footer, {width: '100%'}]}>
          <Text style={[styles.text_footer]}>Home Network Home (SSID)</Text>
          <View style={styles.action}>
            <Ionicons name="wifi" color={'rgba(17, 17, 17, 0.25)'} size={20} />

            <TextInput
              style={[
                styles.textInput,
                {
                  color: 'rgba(17, 17, 17, 1)',
                },
              ]}
              autoCapitalize="none"
              placeholder="Home WiFi"
              //placeholderTextColor="#000"
              value={wifiSSID}
              onChangeText={(val) => setWifiSSID(val)}
              // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
            />

            {data.check_firstNameChange ? (
              <Animatable.View animation="bounceIn">
                <Text>
                  <Feather name="check-circle" color="#12B293" size={20} />
                </Text>
              </Animatable.View>
            ) : null}
          </View>
        </View>
        <View style={[styles.input_footer, {width: '100%'}]}>
          <Text style={[styles.text_footer]}>Password</Text>
          <View style={styles.action}>
            <Feather name="lock" color={'rgba(17, 17, 17, 0.25)'} size={20} />
            <TextInput
              secureTextEntry={data.secureTextEntry ? true : false}
              style={[
                styles.textInput,
                {
                  color: 'rgba(17, 17, 17, 1)',
                },
              ]}
              autoCapitalize="none"
              onChangeText={(val) => setWifiPassword(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather
                  name="eye-off"
                  color={'rgba(17, 17, 17, 0.25)'}
                  size={20}
                />
              ) : (
                <Feather
                  name="eye"
                  color={'rgba(17, 17, 17, 0.25)'}
                  size={20}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 6 characters long.
            </Text>
          </Animatable.View>
        )}

        {!isSendingWifiData ? (
          <TouchableOpacity
            onPress={() => {
              //setIsModalVisible(true);
              configureNetwork();
              // navigation.navigate('addDevices');
            }}
            style={styles.Button}>
            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
              Connect
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              //setIsModalVisible(true);
              cancelNetworkConfiguration();
              // navigation.navigate('addDevices');
            }}
            style={styles.Button}>
            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
              Cancel
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <Modal
        onBackdropPress={() => {
          setIsModalVisible(false);
        }}
        isVisible={isModalVisible}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.innerModal}>
            <Text
              style={{
                color: '#12B293',
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 25,
              }}>
              Sucessful
            </Text>
            <SuccessIcon />
            <Text style={{width: 239, textAlign: 'center', marginTop: 25}}>
              Device is successfully connected to your Home Network
            </Text>

            <View
              style={{
                width: '90%',
                height: 119,
                backgroundColor: '#F0F0F0',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 20,
              }}>
              <GreenWifiIcon />
              <Text style={{width: 211, fontSize: 14}}>
                The device is always autoconnect to the Home Network whenever it
                restarts. If you change your Home Network in the future, you
                have to reconnect the devices again.
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                setIsModalVisible(false);
                navigation.navigate('locationDef');
              }}
              style={[styles.Button, {width: '90%'}]}>
              <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold'}}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Ssid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  innerContainer: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
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
  wifiDescription: {
    fontSize: 20,
    marginTop: 50,
    marginBottom: 30,
    color: '#4F4F4F',
    textAlign: 'center',
    width: 350,
  },
  text_footer: {
    color: 'rgba(17, 17, 17, 0.25)',
    fontSize: 12,
    fontFamily: 'Montserrat',
    paddingTop: 20,
  },
  input_footer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    marginTop: 30,
    paddingRight: 20,
    paddingLeft: 20,
    height: 85,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    color: '#05375a',
  },
  Button: {
    width: '100%',
    height: 70,
    backgroundColor: '#12B293',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  innerModal: {
    height: '70%',
    width: 365,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
