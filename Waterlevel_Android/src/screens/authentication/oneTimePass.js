import React, {useEffect} from 'react';
import Logo from '../../assets/logo.js';
import {API_KEY} from '@env';

const axios = require('axios').default;

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Feather from 'react-native-vector-icons/Feather';

import {useTheme} from 'react-native-paper';

import {AuthContext} from '../../components/context';
import Button from '../../components/button';
import Users from '../../../model/users';
import {useNavigation} from '@react-navigation/core';
import AsyncStorage from '@react-native-community/async-storage';

const OneTimePass = () => {
  const {navigate} = useNavigation();

  const [data, setData] = React.useState({
    email: null,
    userToken: null,
    check_OTPInputChange: false,
    isValidOTP: true,
  });

  console.log('====================================');
  console.log('hello from OTP');
  console.log('====================================');

  React.useEffect(() => {
    const email = AsyncStorage.getItem('email');

    email.then((value) => {
      console.log('====================================');
      console.log(value);
      console.log('====================================');

      setData({
        ...data,
        email: value,
      });
    });
  }, []);

  const {authContext} = React.useContext(AuthContext);
  const {verify} = authContext;

  const OTPInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        userToken: val,
        check_OTPInputChange: true,
        isValidOTP: true,
      });
    } else {
      setData({
        ...data,
        userToken: val,
        check_OTPInputChange: false,
        isValidOTP: false,
      });
    }
  };

  const handleValidOTP = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };
  const handleVerification = async (email_address, auth_token) => {
    console.log('====================================');
    console.log(data.email);
    console.log('====================================');
    const verifiedUser = await axios
      .post('https://friday-apis.herokuapp.com/verify?APIKey=' + API_KEY, {
        email_address: data.email,
        auth_token: data.userToken,
      })
      .catch((error) => console.log(error));

    console.log('====================================');
    console.log(verifiedUser);
    console.log('====================================');

    if (verifiedUser) {
      verify(verifiedUser);
      navigate('HomeScreen');
    } else {
      console.log('Thief');
    }
  };

  const reverify = async () => {
    console.log('====================================');
    console.log('log from resend');
    console.log('====================================');
    const resentToken = await axios
      .post('https://friday-apis.herokuapp.com/reverify?APIKey=' + API_KEY, {
        email_address: data.email,
      })
      .catch((error) => console.log(error.response.data));

    console.log('====================================');
    console.log(resentToken);
    console.log('====================================');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.header}>
        <Logo />
        {/* <Image source={logo} /> */}
        <Text style={styles.text_header}>Verify the OTP sent to your mail</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={[styles.footer]}>
        <View style={styles.input_footer}>
          <Text style={[styles.text_footer]}>O T P</Text>
          {/* <FontAwesome  name='user-o' color='red' size={30} /> */}
          <View style={styles.action}>
            <Feather name="mail" color={'rgba(17, 17, 17, 0.25)'} size={20} />
            <TextInput
              style={[
                styles.textInput,
                {
                  color: 'rgba(17, 17, 17, 0.25)',
                },
              ]}
              autoCapitalize="none"
              onChangeText={(val) => OTPInputChange(val)}
              onEndEditing={(e) => handleValidOTP(e.nativeEvent.text)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="#12B293" size={20} />
              </Animatable.View>
            ) : null}
          </View>
        </View>
        {data.isValidOTP ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>OTP must be 4 characters long.</Text>
          </Animatable.View>
        )}

        <TouchableOpacity style={styles.forgotP}>
          <Text style={{color: '#555555', marginTop: 15}}>
            Didn't receive any OTP?
            <TouchableOpacity
              onPress={() => {
                reverify();
              }}>
              <Text style={{color: '#12B293', marginLeft: 10}}>Resend</Text>
            </TouchableOpacity>
          </Text>
        </TouchableOpacity>
        <Button
          text="Verify"
          action={() => {
            handleVerification(data.email, data.userToken);
          }}
        />
        <View style={styles.alreadyMember}>
          <Text>New User?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}>
            <Text style={{color: '#12B293', marginLeft: 10}}>Register</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default OneTimePass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#FFF',
  },
  header: {
    flex: 1,
    height: '50%',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    // paddingBottom: 50,
    alignItems: 'center',
  },
  footer: {
    flex: 2,
    backgroundColor: 'pink',
    height: '50%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    // paddingVertical: 30,
  },
  forgotP: {
    alignItems: 'flex-end',
    margin: 20,
  },
  text_header: {
    color: '#555555',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 15,
    fontWeight: 'bold',
    padding: 30,
  },
  socila_header: {
    // flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    // backgroundColor: 'green'
  },
  text_footer: {
    color: 'rgba(17, 17, 17, 0.25)',
    fontSize: 12,
    fontFamily: 'Montserrat',
    paddingTop: 10,
  },
  input_footer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    marginTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    height: 85,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#f2f2f2',
    // paddingBottom: 5,
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
    // marginTop: Platform.OS === 'ios' ? 0 : -12,
    // paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  alreadyMember: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom:
  },
});

// React.useEffect(async () => {
//   const newEmail = await AsyncStorage.getItem('email');

//   console.log('====================================');
//   console.log('email saved is: ' + newEmail);
//   console.log('====================================');

//   setData({
//     ...data,
//     email: newEmail,
//   });
// }, []);

// const {colors} = useTheme();
