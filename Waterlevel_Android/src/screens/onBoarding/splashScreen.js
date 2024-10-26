import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';
import logo from '../../assets/whiteLogo.png';
import {AuthContext} from '../../components/context';

const brandColor = '#12B293';

const SplashScreen = () => {
  const {navigate, reset, replace} = useNavigation();

  React.useEffect(() => {
    const getTOken = async () => {
      const value = await AsyncStorage.getItem('userToken');
      const firstTimer = await AsyncStorage.getItem('firstTimer');

      
      console.log('====================================');
      console.log(firstTimer + ' from splashhh');
      console.log('====================================');

      if (firstTimer == null) {
        replace('OnBoardingScreen');
      } else if(value) {
        replace('drawers');
      }else{
        replace('SignInScreen')
      }
    };

    getTOken();
  }, []);

  return (
    <View style={styles.body}>
      <StatusBar hidden={false} backgroundColor={brandColor} />
      <Image source={logo} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: brandColor,
  },
});

// firstTimeLogin ? 'SplashScreen' :
// setTimeout(() => {
//   navigation.reset({
//     index: 0,
//     routes: [{name: token ? 'HomeScreen' : 'SignInScreen'}],
//   });
//   console.log('from splash', token);
// }, 3000);
