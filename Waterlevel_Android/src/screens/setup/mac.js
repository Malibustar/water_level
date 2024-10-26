import {StyleSheet, Image, Text, View} from 'react-native';
import ArrowDownIcon from '../../assets/arrowDown';
import React from 'react';
import macad from '../../assets/macad.png';
import Feather from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native';
import Button from '../../components/button';

const Mac = ({navigation}) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidEmail: true,
    isValidPassword: true,
  });
  return (
    <View style={styles.container}>
      <View style={styles.innerCon}>
        <ArrowDownIcon />
        <Image source={macad} />
        <Text style={styles.wifiDesc}>Input the Friday device MAC address</Text>
        <Text style={styles.check}>Check device packaging for this info</Text>
        <View style={styles.input_footer}>
          <Text style={[styles.text_footer]}>Device MAC Address</Text>
          <View style={styles.action}>
            <Feather
              name="md-hardware-chip-outline"
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
              placeholder="00:1B:44:11:3A:B7"
              placeholderTextColor="#000"
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
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
        <Button
          text="Continue"
          width={364}
          marginTop={100}
          action={() => {
            // handleVerification(data.email, data.userToken);
            navigation.navigate('test');
          }}
        />
      </View>
    </View>
  );
};

export default Mac;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
  },
  innerCon: {
    // borderWidth: 1,
    width: '90%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wifiDesc: {
    fontSize: 30,
    marginTop: 70,
    color: '#555555',
    textAlign: 'center',
    width: 289,
    fontWeight: 'bold',
  },
  check: {
    fontSize: 20,
    marginTop: 15,
    color: '#4F4F4F',
    textAlign: 'center',
    width: 289,
    lineHeight: 30,
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
    marginTop: 70,
    paddingRight: 20,
    paddingLeft: 20,
    height: 85,
    width: '100%',
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
});
