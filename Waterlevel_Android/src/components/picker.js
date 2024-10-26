import React, {useState} from 'react';
import {TextInput} from 'react-native';
// import {TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View, Picker} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';

const Pickerr = (props) => {
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

  const [room, setRoom] = useState('Parlour');

  return (
    <View
      style={[styles.input_footer, {width: props.width ? props.width : null}]}>
      <Text style={[styles.text_footer]}>Room Type</Text>
      <View style={styles.action}>
        <Ionicons
          name="md-bed-outline"
          color={'rgba(17, 17, 17, 0.25)'}
          size={20}
        />

        <DropDownPicker
          items={[
            {label: 'Parlour', value: 'Parlour'},
            {label: 'Bedroom', value: 'Bedroom'},
            {label: 'Kitchen', value: 'Kitchen'},
            {label: 'Garage', value: 'Garage'},
            {label: 'Garden', value: 'Garden'},
          ]}
          arrowColor="#12B293"
          arrowSize={25}
          placeholder="Bedroom"
          zIndex={5000}
          // autoScrollToDefaultValue	= {true}
          // searchablePlaceholder	= 'Search for a device'
          // searchable	= {true}
          itemStyle={{
            justifyContent: 'flex-start',
            padding: 20,
            width: '100%',
            height: 30,
          }}
          style={{
            paddingVertical: 10,
            backgroundColor: '#F0F0F0',
            borderWidth: 0,
          }}
          labelStyle={{fontSize: 14, color: '#111', fontWeight: 'bold'}}
          containerStyle={{height: 40, width: '95%'}}
          onChangeItem={item => setRoom(item.value)}
          disabled={false}
        />
      </View>
    </View>
  );
};

export default Pickerr;

const styles = StyleSheet.create({
  input_footer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    marginTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    height: 85,
    zIndex: 1000,
  },
  text_footer: {
    color: 'rgba(17, 17, 17, 0.25)',
    fontSize: 12,
    fontFamily: 'Montserrat',
    paddingTop: 20,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
