import React, {useState} from 'react';
import {API_KEY} from '@env';

const axios = require('axios').default;
import logo from '../../assets/greenLogo.png';
// import Logo from '../../assets/logo.js';
// import google from '../../assets/google';
import Logo from '../../assets/logo.js';

import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {useTheme} from 'react-native-paper';

import {AuthContext} from '../../components/context';
import Button from '../../components/button';
import Google from '../../assets/google';
import Facebook from '../../assets/facebook';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import Loader from '../../components/loader';

const SignUpScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const {navigate} = useNavigation();
  const [data, setData] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    check_firstNameChange: false,
    check_lastNameChange: false,
    check_emailChange: false,
    check_phoneChange: false,
    check_passwordChange: false,
    secureTextEntry: true,
    isValidFirstName: true,
    isValidLastName: true,
    isValidPhone: true,
    isValidEmail: true,
    isValidPassword: true,
  });

  console.log('====================================');
  console.log(data.firstname);
  console.log('====================================');

  const {colors} = useTheme();

  const {authContext, loginState} = React.useContext(AuthContext);
  const {signUp} = authContext;

  const handleSignUp = async () => {
    console.log('====================================');
    console.log(data.firstname);
    console.log('====================================');

    const createdUser = await axios
      .post('https://friday-apis.herokuapp.com/register?APIKey=' + API_KEY, {
        first_name: data.firstname,
        last_name: data.lastname,
        email_address: data.email,
        phone_number: data.phone,
        password: data.password,
      })
      .catch((error) => console.log(error));

    console.log('====================================');
    console.log('created user:' + createdUser);
    // console.log(createdUser.status);
    console.log(createdUser);
    console.log('====================================');
    const email = data.email;
    if (createdUser) {
      console.log('====================================');
      console.log('that is the gist');
      console.log('====================================');
      signUp(createdUser, email);
      setLoading(false);
      navigate('OneTimePass');
    } else {
      console.log('====================================');
      console.log('NOT REGISTERED');
      console.log('====================================');
    }

    if (
      data.firstname.length == 0 ||
      data.lastname.length == 0 ||
      data.password.length == 0 ||
      data.email.length == 0 ||
      data.phone.length == 0
    ) {
      Alert.alert('Wrong Input!', 'Input fields cannot be empty.', [
        {text: 'Okay'},
      ]);
      return;
    }
  };

  const handleFirstNameChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        firstname: val,
        check_firstNameChange: true,
        isValidFirstName: true,
      });
    } else {
      setData({
        ...data,
        firstname: val,
        check_firstNameChange: false,
        isValidFirstName: false,
      });
    }
  };

  const handleLastNameChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        lastname: val,
        check_lastNameChange: true,
        isValidLastName: true,
      });
    } else {
      setData({
        ...data,
        lastname: val,
        check_lastNameChange: false,
        isValidLastName: false,
      });
    }
  };

  const handleEmailChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        check_emailChange: true,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_emailChange: false,
        isValidEmail: false,
      });
    }
  };

  const handlePhoneChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        phone: val,
        check_phoneChange: true,
        isValidPhone: true,
      });
    } else {
      setData({
        ...data,
        phone: val,
        check_phoneChange: false,
        isValidPhone: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View style={styles.header}>
          <Logo />
          <Text style={styles.text_header}>Sign up with</Text>
          <View style={styles.socila_header}>
            <Google />
            <Facebook />
          </View>
          <Text style={styles.text_header}>Or</Text>
        </View>

        <Animatable.View animation="fadeInUpBig" style={[styles.footer]}>
          <View style={styles.input_footer}>
            <Text style={[styles.text_footer]}>Firstname</Text>
            <View style={styles.action}>
              <Feather name="user" color={'rgba(17, 17, 17, 0.25)'} size={20} />

              <TextInput
                style={[
                  styles.textInput,
                  {
                    color: 'rgba(17, 17, 17, 0.25)',
                  },
                ]}
                autoCapitalize="none"
                onChangeText={(val) => handleFirstNameChange(val)}
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

          {data.isValidFirstName ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Firstname must be 4 characters long.
              </Text>
            </Animatable.View>
          )}
          <View style={styles.input_footer}>
            <Text style={[styles.text_footer]}>
              Lastname
              {/* <FontAwesome  name='user-o' color='red' size={30} /> */}
            </Text>
            <View style={styles.action}>
              <Feather name="user" color={'rgba(17, 17, 17, 0.25)'} size={20} />
              <TextInput
                style={[
                  styles.textInput,
                  {
                    color: 'rgba(17, 17, 17, 0.25)',
                  },
                ]}
                autoCapitalize="none"
                onChangeText={(val) => handleLastNameChange(val)}
                // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
              />
              {data.check_lastNameChange ? (
                <Animatable.View animation="bounceIn">
                  {/* <FontAwesome style={{fontFamily: 'FontAwesome', fontSize: 20, color: 'green'}}>{Icons.exclamationTriangle}</FontAwesome> */}
                  <Text>
                    <Feather name="check-circle" color="#12B293" size={20} />
                  </Text>
                </Animatable.View>
              ) : null}
            </View>
          </View>

          {data.isValidLastName ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Lastname must be 4 characters long.
              </Text>
            </Animatable.View>
          )}
          <View style={styles.input_footer}>
            <Text style={[styles.text_footer]}>
              Email
              {/* <FontAwesome  name='user-o' color='red' size={30} /> */}
            </Text>
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
                textContentType="emailAddress"
                onChangeText={(val) => handleEmailChange(val)}
                // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
              />
              {data.check_emailChange ? (
                <Animatable.View animation="bounceIn">
                  {/* <FontAwesome style={{fontFamily: 'FontAwesome', fontSize: 20, color: 'green'}}>{Icons.exclamationTriangle}</FontAwesome> */}
                  <Text>
                    <Feather name="check-circle" color="#12B293" size={20} />
                  </Text>
                </Animatable.View>
              ) : null}
            </View>
          </View>

          {data.isValidEmail ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>must be a valid email</Text>
            </Animatable.View>
          )}
          <View style={styles.input_footer}>
            <Text style={[styles.text_footer]}>
              Phone
              {/* <FontAwesome  name='user-o' color='red' size={30} /> */}
            </Text>
            <View style={styles.action}>
              <Feather
                name="phone"
                color={'rgba(17, 17, 17, 0.25)'}
                size={20}
              />
              <TextInput
                style={[
                  styles.textInput,
                  {
                    color: 'rgba(17, 17, 17, 0.25)',
                  },
                ]}
                autoCapitalize="none"
                textContentType="telephoneNumber"
                onChangeText={(val) => handlePhoneChange(val)}
                // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
              />
              {data.check_phoneChange ? (
                <Animatable.View animation="bounceIn">
                  {/* <FontAwesome style={{fontFamily: 'FontAwesome', fontSize: 20, color: 'green'}}>{Icons.exclamationTriangle}</FontAwesome> */}
                  <Text>
                    <Feather name="check-circle" color="#12B293" size={20} />
                  </Text>
                </Animatable.View>
              ) : null}
            </View>
          </View>

          {data.isValidPhone ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Phone number must a valid phone number.
              </Text>
            </Animatable.View>
          )}
          <View style={styles.input_footer}>
            <Text
              style={[
                styles.text_footer,
                // {
                //   // marginTop: 35,
                // },
              ]}>
              Password
            </Text>
            <View style={styles.action}>
              <Feather name="lock" color={'rgba(17, 17, 17, 0.25)'} size={20} />
              <TextInput
                secureTextEntry={data.secureTextEntry ? true : false}
                style={[
                  styles.textInput,
                  {
                    color: 'rgba(17, 17, 17, 0.25)',
                  },
                ]}
                autoCapitalize="none"
                textContentType="newPassword"
                onChangeText={(val) => handlePasswordChange(val)}
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
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )}

          <Button
            text="Continue"
            marginTop={50}
            action={() => {
              handleSignUp();
              setLoading(true);
            }}
          />
          <View style={styles.alreadyMember}>
            <Text>Existing User?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignInScreen');
              }}>
              <Text style={{color: '#12B293', marginLeft: 10}}>Login</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
      <Loader loading={loading} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: '100%',
    backgroundColor: '#FFF',
  },
  header: {
    flex: 1,
    // height: '25%',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    // paddingBottom: 50,
    alignItems: 'center',
    paddingTop: 70,
  },
  footer: {
    // flex: 1,
    backgroundColor: 'pink',
    // height: '60%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    // paddingVertical: 30,
    paddingBottom: 40,
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
    paddingTop: 20,
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
    marginTop: 40,
    marginBottom: 20,
  },
});
