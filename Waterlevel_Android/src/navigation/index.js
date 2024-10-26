import React, {useEffect, useMemo, useReducer, useState} from 'react';
import {AuthContext} from '../components/context';
import {Stack} from './common';
import HomeStack from './homeStack';
import SplashScreen from '../screens/onBoarding/splashScreen';
import onBoardingScreen from '../screens/onBoarding/onBoardingScreen';
import SignInScreen from '../screens/authentication/signInScreen';
import SignUpScreen from '../screens/authentication/signUpScreen';
import OneTimePass from '../screens/authentication/oneTimePass';
import {ActivityIndicator, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation, useNavigationBuilder} from '@react-navigation/core';

import {Drawer} from './common';
import DrawerStack from './drawStack';
import {Text, Button} from 'react-native';
import Setup from '../screens/setup/setup';
import HowTo from '../screens/setup/howto';
import CreateHome from '../screens/setup/createHome';
import CreateNewHome from '../screens/setup/createNewHome';
import AddDevices from '../screens/setup/addDevices';
import Poseidon from '../screens/poseidon';
import Location from '../screens/setup/location';
import Ssid from '../screens/setup/ssid';
import LocationDef from '../screens/setup/locationDef';
import Qrscanner from '../screens/setup/qrscanner';
import FridaySwitchPro from '../screens/setup/fridaySwitchPro';
import Mac from '../screens/setup/mac';
import Test from '../screens/setup/test';
import DeviceRoom from '../screens/setup/deviceRoom';
import WaterTank from '../screens/waterTank';

const Root = Stack;
// const Root = Drawer;

function MainNavigator() {
  const DetailScreen = ({navigation}) => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{padding: 30, fontSize: 50, textAlign: 'center'}}>
          This screen is currently under construction.
        </Text>
        <Button
          title="Go to home screen"
          onPress={() => {
            navigation.navigate('drawers');
          }}
        />
      </View>
    );
  };

  const loader = ({navigation}) => {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  };

  const globlaScreenOptions = {
    headerShown: false,
  };

  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);

  const initialLoginState = {
    isLoading: true,
    email: null,
    userToken: null,
    email: null,
    firstTimeLogin: true,
  };

  console.log('====================================');
  console.log('initial user token: ' + initialLoginState.userToken);
  console.log('====================================');

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
          firstTimeLogin: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          email: action.email,
          userToken: action.token,
          isLoading: false,
          firstTimeLogin: false,
        };
      case 'VERIFY':
        return {
          ...prevState,
          email: action.email,
          userToken: action.token,
          isLoading: false,
          firstTimeLogin: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false,
          firstTimeLogin: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          email: action.email,
          // userToken: action.token,
          isLoading: false,
          firstTimeLogin: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      signUp: async (createdUser, email) => {
        // setUserToken(null);
        // setIsLoading(false);
        const newEmail = email;

        try {
          await AsyncStorage.setItem('email', newEmail);
          console.log('user email inside setItem: ', newEmail);
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'REGISTER', email: newEmail});
      },

      verify: async (verifiedUser) => {
        const newUserToken = String(verifiedUser[0].user_token);
        const newEmail = verifiedUser[0].email;
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.setItem('email', email);
          console.log('user email inside setItem: ', email);
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'VERIFY', email: newEmail, token: newUserToken});
      },

      signIn: async (foundUser) => {
        // setUserToken('abc');
        // setIsLoading(false);
        const newUserToken = String(foundUser.data.user_details.user_token);

        const newEmail = foundUser.data.user_details.email;
        const newUser = JSON.stringify(foundUser.data);

        try {
          await AsyncStorage.setItem('userToken', newUserToken);
          await AsyncStorage.setItem('newUser', newUser);
          await AsyncStorage.setItem('firstTimer', 'new user');
          console.log('user token inside setItem: ', newUserToken);
        } catch (e) {
          console.log(e);
        }

        // console.log('user token: ', userToken);
        dispatch({type: 'LOGIN', email: newEmail, userToken: newUserToken});
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        if (loginState.userToken == null) {
          console.log('====================================');
          console.log('Succesfully loged out');
          console.log('====================================');
        } else {
          console.log('====================================');
          console.log('User is still logged in');
          console.log('====================================');
        }

        const keys = ['userToken', 'homeToken', 'newUser', 'homeName'];
        try {
          await AsyncStorage.multiRemove(keys);
          dispatch({type: 'LOGOUT'});
        } catch (e) {
          console.log(e);
        }

        console.log('====================================');
        console.log('Romved all keys successfuly');
        console.log('====================================');
      },
    }),
    [],
  );

  useEffect(() => {
    async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        // console.log('user token inside get: ', userToken);
      } catch (e) {
        console.log(e);
      }
      // console.log('user token outside get: ', userToken);
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
      navigate('HomeScreen');

      // setIsLoading(false);
    };
  }, []);

  return (
    <AuthContext.Provider value={{authContext, loginState}}>
      <Root.Navigator screenOptions={globlaScreenOptions}>

      <Root.Screen name={'Poseidon'} component={Poseidon} />
        {/* <Root.Screen name={'SplashScreen'} component={SplashScreen} />
        <Root.Screen name={'OneTimePass'} component={OneTimePass} />
        <Root.Screen name={'HomeScreen'} component={HomeStack} />
        <Root.Screen name={'OnBoardingScreen'} component={onBoardingScreen} />
        <Root.Screen name={'SignInScreen'} component={SignInScreen} />
        <Root.Screen name={'SignUpScreen'} component={SignUpScreen} />
        <Root.Screen name={'construct'} component={DetailScreen} />
        <Root.Screen name={'drawers'} component={DrawerStack} />
        <Root.Screen name={'setup'} component={Setup} />
        <Root.Screen name={'howto'} component={HowTo} />
        <Root.Screen name={'createHome'} component={CreateHome} />
        <Root.Screen name={'createNewHome'} component={CreateNewHome} />
        <Root.Screen name={'addDevices'} component={AddDevices} />
        <Root.Screen name={'location'} component={Location} />
        <Root.Screen name={'ssid'} component={Ssid} />
        <Root.Screen name={'locationDef'} component={LocationDef} />
        <Root.Screen name={'qrscanner'} component={Qrscanner} />
        <Root.Screen name={'fridaySwitchPro'} component={FridaySwitchPro} />
        <Root.Screen name={'mac'} component={Mac} />
        <Root.Screen name={'test'} component={Test} />
        <Root.Screen name={'deviceroom'} component={DeviceRoom} /> */}
      </Root.Navigator>
    </AuthContext.Provider>
  );
}

export default MainNavigator;
