import React from 'react';
import {StyleSheet, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnBoardingScreen = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('SignInScreen')}
      onDone={() => navigation.replace('SignInScreen')}
      bottomBarHeight={100}
      bottomBarColor={"white"}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image source={require('../../assets/world.png')} />
          ),
            title: 'Secure',
          subtitle:
            'Securely control your devices remotely from anywhere n the universe',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image source={require('../../assets/automate.png')} />
          ),
            title: 'Automative',
          subtitle:
            'Automate behaviour, schedule personal tasks and set reminders',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image source={require('../../assets/monitor.png')} />
          ),
            title: 'Monitor',
          subtitle: 'Monitor and manage your power, water & gas consumption',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image source={require('../../assets/shareaccess.png')} />
          ),
            title: 'Control',
          subtitle: 'Share control access with family & friends',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image source={require('../../assets/getnotified.png')} />
          ),
            title: 'Notifications',
          subtitle:
            'Get notified how you are running low on water and power supply or have a faulty appliance',
        },
      ]}
    />
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({});
