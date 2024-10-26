import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Logo from '../../assets/logo';
import Button from '../../components/button';

const Setup = ({navigation}) => {
  // const width = 288;
  return (
    <View style={styles.container}>
      <View style={styles.innerContianer}>
        <Logo />
        <Text style={styles.setUpText}>Setup your Smart Home </Text>
        <Text style={styles.smallText}>
          Securely monitor, control your home remotely from anywhere on the
          universe
        </Text>
        <Button
          text="Get Started"
          width={288}
          action={() => {
            navigation.navigate('createNewHome');
            // console.log('click from setup');
          }}
        />
      </View>
    </View>
  );
};

export default Setup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContianer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'green',
  },
  setUpText: {
    fontSize: 60,
    lineHeight: 59,
    textAlign: 'center',
    fontWeight: 'bold',
    // height: 118,
    width: 300,
    fontStyle: 'normal',
    fontFamily: 'Montserrat',
    marginTop: 50,
  },
  smallText: {
    fontSize: 16,
    fontWeight: 'normal',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    height: 42,
    width: 280,
    // lineHeight: 150,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
});
