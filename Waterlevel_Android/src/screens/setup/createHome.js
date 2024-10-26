import React from 'react';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddIcon from '../../assets/add';
import Button from '../../components/button';
import Picker from '../../components/picker';

const CreateHome = ({navigation}) => {
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

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidEmail: false,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.greenText}>Create</Text>
        <Text style={styles.bigText}>Smart Home</Text>

        <View style={styles.input_footer}>
          <Text style={[styles.text_footer]}>Smart Home Name</Text>
          <View style={styles.action}>
            <Feather name="home" color={'rgba(17, 17, 17, 0.25)'} size={20} />

            <TextInput
              style={[
                styles.textInput,
                {
                  color: 'rgba(17, 17, 17, 0.25)',
                },
              ]}
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

        <Text style={styles.greenText}>Rooms</Text>

        <View style={styles.input_footer}>
          <Text style={[styles.text_footer]}>Room Name</Text>
          <View style={styles.action}>
            <Ionicons
              name="md-bed-outline"
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

        <Picker />

        {/* <View style={styles.input_footer}>
          <Text style={[styles.text_footer]}>Room Type</Text>
          <View style={styles.action}>
            <Ionicons
              name="md-bed-outline"
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
        </View> */}

        <TouchableOpacity style={styles.addRoom}>
          <AddIcon style={styles.addBtn} />
          <Text style={styles.addNew}>Add New Room</Text>
        </TouchableOpacity>
        <Button
          text="Continue"
          action={() => {
            // handleVerification(data.email, data.userToken);
            navigation.navigate('addDevices');
          }}
        />
      </View>
    </View>
  );
};

export default CreateHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '100%',
    backgroundColor: '#FFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: '90%',
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
  greenText: {
    fontFamily: 'Montserrat',
    fontSize: 24,
    color: '#12B293',
    marginTop: 50,
    fontWeight: 'bold',
  },
  bigText: {
    fontSize: 48,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  addRoom: {
    width: '100%',
    height: 85,
    backgroundColor: '#12B293',
    marginTop: 20,
    marginBottom: 70,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  addNew: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    fontStyle: 'normal',
  },
});
