import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import Style from './getStartedStyle';
import Bell from '../../assets/bell.png';
import Kitchen from '../../assets/kitchen.png';
import grey from '../../assets/grey.png';
import wifi from '../../assets/wifi.png';
import temp from '../../assets/temp.png';
import humid from '../../assets/humid.png';
import sun from '../../assets/sun.png';
import on from '../../assets/on.png';
import activeKitchenIcon from '../../assets/kitchenactive.png';
import kitchenIcon from '../../assets/micro.png';
import palor from '../../assets/palor.png';
import Palor from '../../assets/chair.png';
import cross from '../../assets/cross.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';
import Bugger from '../../components/handBugger';
import NewModal from '../../components/newModal';
import DisconnectIcon from '../../assets/disconnect';
import PowerOffIcon from '../../assets/powerOff';
import PowerOnIcon from '../../assets/powerOn';
import Button from '../../components/button';

const GetStarted = ({navigation}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      let res = await AsyncStorage.getItem('newUser');
      res = JSON.parse(res);
      console.log(res);
      setUser(res);
    }

    fetchUser();
  }, []);

  const [active, setActive] = useState('');
  const [activeIcon, setActiveIcon] = useState();

  let todays = new Date().getHours();

  console.log('====================================');
  console.log(todays, 'from time');
  console.log('====================================');

  let rooms = user?.user_payload.Rooms;
  let devices = user?.user_payload.Devices;

  const [userDevices, showUserDevices] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);
  const [masterSwitch, setMasterSwitch] = useState(true);
  const [deviceSwitch, setDevicesSwitch] = useState(true);

  const toggleDevices = () => {
    !userDevices ? showUserDevices(true) : showUserDevices(false);
  };

  const toggleDeviceSwitch = () => {
    !deviceSwitch ? setDevicesSwitch(true) : setDevicesSwitch(false);
  };

  const roomIcom = () => {
    {active.room_type === 'Kitchen' ? kitchenIcon : null  }
  };

  return (
    <SafeAreaView style={[Style.Container, Style.rowDirection]}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <NewModal
        navigation={navigation}
        show={isModalVisible}
        setModalVisible={setModalVisible}
      />
      <View style={Style.mainView}>
        <View style={[Style.rowDirection, Style.flexEnd]}>
          <Bugger route={navigation} />

          <Text style={Style.Title}>
            {user?.user_payload.Homes[0]
              ? user?.user_payload.Homes[0].home_name
              : 'Sweet Home'}
          </Text>
        </View>
        <View style={Style.subTitle}>
          <Text style={Style.greetingText}>
            {todays <= 11
              ? 'Good Morning'
              : todays >= 12
              ? 'Good Afternoon'
              : todays >= 17
              ? 'Good Evening'
              : null}
          </Text>

          <Text style={Style.nameStyle}>{user?.user_details.first_name}</Text>
        </View>

        <View
          style={[Style.userDevices, {display: userDevices ? 'flex' : 'none'}]}>
          <View style={Style.room}>
            <View style={Style.roomState}>
              <DisconnectIcon />
            </View>
            <View style={Style.roomType}>
              <Text style={Style.roomTypeName}>Living Room</Text>
              <Text style={{color: '#555555', fontSize: 10}}>
                Master Switch
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                masterSwitch ? setMasterSwitch(false) : setMasterSwitch(true);
              }}
              style={Style.roomSwitch}>
              {masterSwitch ? <PowerOnIcon /> : <PowerOffIcon />}
            </TouchableOpacity>
          </View>

          <View style={Style.connectedDevices}>
            <Text style={{fontSize: 12, color: '#555555', fontWeight: '900'}}>
              Connected Device
            </Text>

            <ScrollView style={Style.devicesList}>
              {devices?.map((device, key) => {
                return (
                  <View key={key} style={Style.connectedDevice}>
                    <View style={Style.devicesDetails}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: '#575757',
                          fontStyle: 'normal',
                        }}>
                        {device.device_name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 10,
                          color: '#575757',
                          fontStyle: 'normal',
                          marginTop: 3,
                        }}>
                        {device.device_type}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: '#555555',
                          fontStyle: 'normal',
                          marginTop: 15,
                        }}>
                        Last Uptime
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          toggleDeviceSwitch();
                        }}>
                        {deviceSwitch ? <PowerOnIcon /> : <PowerOffIcon />}
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          color: '#555555',
                          fontStyle: 'normal',
                          marginTop: 10,
                        }}>
                        3hrs ago
                      </Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
            <Button
              text="Done"
              marginTop={20}
              action={() => {
                toggleDevices();
              }}
            />
          </View>
        </View>

        <View style={{display: userDevices ? 'none' : 'flex'}}>
          <TouchableOpacity style={Style.kitchenStyle}>
            <Image
              source={
                active.room_type === 'Kitchen'
                  ? Kitchen
                  : active.room_type === 'Parlour'
                  ? palor
                  : Kitchen
              }
            />
            <Image source={grey} style={Style.greyStyle} />
            <View style={Style.activeWrapper}>
              <Image source={wifi} />
              <Text style={Style.activeText}>{active.room_name}</Text>
            </View>
          </TouchableOpacity>

          <View style={Style.defaultTop}>
            <View style={[Style.rowDirection, Style.tabWrapper]}>
              <View style={Style.tempStyle}>
                <Image source={temp} style={Style.iconStyle} />
                <View style={Style.rowDirection}>
                  <Text style={Style.ActiveTextColor}>27</Text>
                  <Text style={Style.ActiveSubTextColor2}>o</Text>
                  <Text style={Style.ActiveSubTextColor}>c</Text>
                </View>
                <Text style={Style.buttomTabText}>Temp</Text>
              </View>

              <View style={Style.tempStyle2}>
                <Image source={humid} style={Style.iconStyle} />
                <View style={Style.rowDirection}>
                  <Text style={Style.ActiveDefaultTextColor}>53</Text>
                  <Text style={Style.ActiveDefaultSubTextColor}>%</Text>
                </View>
                <Text style={Style.defaultbuttomTabText}>Humidity</Text>
              </View>
            </View>
            <View
              style={[Style.rowDirection, Style.tabWrapper, Style.defaultTop]}>
              <View style={Style.tempStyle2}>
                <Image source={sun} style={Style.iconStyle} />
                <View style={Style.rowDirection}>
                  <Text style={Style.ActiveDefaultTextColor}>75</Text>
                  <Text style={Style.ActiveDefaultSubTextColor}>%</Text>
                </View>
                <Text style={Style.defaultbuttomTabText}>Light</Text>
              </View>

              <TouchableOpacity
                style={Style.tempStyle2}
                onPress={toggleDevices}>
                <Image source={on} style={Style.iconStyle} />
                <View style={Style.rowDirection}>
                  <Text style={Style.ActiveDefaultTextColor}>
                    {user ? user?.user_payload.Devices.length : 0}
                  </Text>
                </View>
                <Text style={Style.defaultbuttomTabText}>
                  {user?.user_payload.Devices.length > 1 ? 'Devices' : 'Device'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={Style.subView}>
        <View style={Style.sideViewWrapper}>
          <TouchableOpacity style={Style.notifStyle}>
            <Image source={Bell} />
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          style={Style.SideIconTabWrapper}>
          {rooms?.map((room, key) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setActive(room);
                  console.log(room);
                }}
                style={
                  active.room_name === room.room_name
                    ? Style.activeStyleIcon
                    : Style.sideIcon
                }
                key={key}>
                <Image
                  source={kitchenIcon}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <View>
          <TouchableOpacity
            onPress={() => setModalVisible(!isModalVisible)}
            style={Style.buttomButton}>
            <Image source={cross} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;
