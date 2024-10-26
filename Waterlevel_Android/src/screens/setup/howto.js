import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Logo from '../../assets/logo';
import Button from '../../components/button';

const HowTo = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContianer}>
        <Logo />
        <Text style={styles.setUpText}>How to set up?</Text>
        <View style={styles.stepsContainer}>
          <View style={styles.stepContainer}>
            <Button
              text="Step 1"
              width={72}
              height={30}
              marginTop={0}
              marginRight={20}
            />
            <Text style={styles.stepText}>
              Give the Smart Home a personalised name and add room(s) to it
            </Text>
          </View>
          <View style={styles.stepContainer}>
            <Button
              text="Step 2"
              width={72}
              height={30}
              marginTop={0}
              marginRight={20}
            />
            <Text style={styles.stepText}>
              Activate pair mode of the device you want to connect in that room
            </Text>
          </View>
          <View style={styles.stepContainer}>
            <Button
              text="Step 3"
              width={72}
              height={30}
              marginTop={0}
              marginRight={20}
            />
            <Text style={styles.stepText}>
              When connected to the desired device, then connect your phone to
              the Home WiFi.
            </Text>
          </View>
          <View style={styles.stepContainer}>
            <Button
              text="Step 4"
              width={72}
              height={30}
              marginTop={0}
              marginRight={20}
            />
            <Text style={styles.stepText}>
              Allow friends, family and people you trust to access your home,
              whenever and however you want.
            </Text>
          </View>
        </View>
        <Button
          text="Get Started"
          width={288}
          marginTop={50}
          action={() => {
            navigation.navigate('createNewHome');
            // console.log('click from setup');
          }}
        />
      </View>
    </View>
  );
};

export default HowTo;

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
    width: '95%',
  },
  setUpText: {
    fontSize: 23,
    lineHeight: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    height: 22,
    width: 139,
    fontStyle: 'normal',
    fontFamily: 'Montserrat',
    marginTop: 50,
    marginBottom: 30,
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    // borderWidth: 1,
    width: '100%',
    margin: 13,
  },
  stepText: {
    width: 280,
    // height: 42,
    fontSize: 19,
    fontWeight: '900',
    lineHeight: 30,
  },
});
