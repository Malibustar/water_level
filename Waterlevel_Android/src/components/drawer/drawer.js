import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from './drawerStyle';
import profile from '../../assets/profile.png';
import icon from '../../assets/user.png';
import home from '../../assets/home.png';
import noti from '../../assets/noti.png';
import chain from '../../assets/chain.png';
import theme from '../../assets/theme.png';
import shield from '../../assets/shield.png';
import help from '../../assets/help.png';
import about from '../../assets/about.png';
import water from '../../assets/water.png';
import logoff from '../../assets/logoff.png';
import reboot from '../../assets/reboot.png';
import login from '../../assets/login.png';
import {AuthContext} from '../../components/context';
import barline from '../../assets/barline.png';
import {useNavigation} from '@react-navigation/core';
import AsyncStorage from '@react-native-community/async-storage';

const Drawer = ({navigation}) => {
  const [user, setUser] = useState(null);

  const {navigate, replace,  reset} = useNavigation();

  useEffect(() => {
    async function fetchUser() {
      let res = await AsyncStorage.getItem('newUser');
      res = JSON.parse(res);
      console.log(res);
      setUser(res);
    }

    fetchUser();
  }, []);

  const {authContext} = React.useContext(AuthContext);

  const {signOut} = authContext;

  const logOut = () => {
    signOut();
    replace('SignInScreen')
  };

  const textArray = [
    {name: 'Profile', logo: icon, Screenname: 'construct'},
    {name: 'Home', logo: home, Screenname: 'GetStartedScreen'},
    {name: 'Notification', logo: noti, Screenname: 'construct'},
    {name: 'Settings', logo: chain, Screenname: 'construct'},
    {name: 'Theme', logo: theme, Screenname: 'construct'},
    {name: 'Privacy Policy', logo: shield, Screenname: 'construct'},
    {name: 'Help', logo: help, Screenname: 'construct'},
    {name: 'About us', logo: about, Screenname: 'construct'},
  ];
  const buttomArray = [
    {name: 'Power Off', logo: logoff},
    {name: 'Reboot', logo: reboot},
    {name: 'Log Out', logo: login, action: logOut},
  ];

  let todays = new Date().getHours();

  return (
    <View style={Style.Container}>
      <View style={Style.headWrapper}>
        <View style={Style.imageWrapper}>
          <Image source={profile} style={Style.imageStyle} />
          <View style={Style.textWrapper}>
            <Text>
              {todays <= 11
                ? 'Good Morning'
                : todays >= 11
                ? 'Good Afternoon'
                : todays >= 17
                ? 'Good Evening'
                : null}
            </Text>
            <Text style={Style.nameText}>
              {user?.user_details.first_name}
            </Text>
          </View>
        </View>
      </View>
      <View style={Style.buttonWrapper}>
        {textArray.map((data, index) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate(data.Screenname)}
              key={index}
              style={Style.button}>
              <Image source={data.logo} />
              <Text style={Style.buttonText}>{data.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('poseidon');
        }}
        style={Style.buttomButton}>
        <Image source={water} />
        <Text style={Style.watertext}>Get Water Now</Text>
      </TouchableOpacity>
      <View style={Style.borderline}>
        <Image source={barline} />
      </View>
      <View style={Style.ButtomWrapper}>
        {buttomArray.map((a, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={Style.logButton}
              onPress={a.action}>
              <Image source={a.logo} style={Style.logImage} />
              <Text>{a.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
export default Drawer;
