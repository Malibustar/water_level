import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import AddIcon from '../../assets/add';
import HOmeWifiIcon from '../../assets/homeWifi';
import RoomIcon from '../../assets/roomIcon';
import Feather from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native';
import Modal from 'react-native-modal';
import SuccessIcon from '../../assets/success';
import DoneIcon from '../../assets/done';
import NotDoneIcon from '../../assets/notDone';

const DeviceRoom = () => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidEmail: true,
    isValidPassword: true,
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [room, setRoom] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.innerCon}>
        <View style={styles.houseName}>
          <HOmeWifiIcon />
          <Text style={{color: '#555555', fontSize: 25, fontWeight: 'bold'}}>
            Franky’s Home
          </Text>
        </View>
        <Text
          style={{
            color: '#12B293',
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: 30,
          }}>
          Add device to room
        </Text>
        <Text style={{color: '#4F4F4F', fontSize: 15}}>
          Select the room where the device is installed
        </Text>
        <View style={styles.roomsContainer}>
          <TouchableOpacity
            onPress={() => {
              setRoom(!room);
            }}
            style={styles.room}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <RoomIcon />
              {room ? <DoneIcon /> : <NotDoneIcon />}
            </View>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#B8B8B8'}}>
              Bedroom
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: '#555555',
                lineHeight: 17,
                width: 69,
              }}>
              Master’s Bedroom
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsModalVisible(true);
            }}
            style={styles.addRoom}>
            <AddIcon style={styles.addBtn} />
            <Text style={styles.addNew}>Add New Room</Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: '#12B293',
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 30,
          }}>
          Friday Switch Pro
        </Text>

        <View style={styles.input_footer}>
          <Text style={[styles.text_footer]}>Device MAC Address</Text>
          <View style={styles.action}>
            <Feather name="wifi" color={'rgba(17, 17, 17, 0.25)'} size={20} />

            <TextInput
              style={[
                styles.textInput,
                {
                  color: 'rgba(17, 17, 17, 0.25)',
                },
              ]}
              placeholder="Air Conditioner"
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
        <Text style={styles.wifiDescription}>
          For easy identification, It is recommended that you use the name of
          the home appliance that is connected to the Friday device.
        </Text>
        <TouchableOpacity
          onPress={() => {
            setIsModalVisible(true);
            // navigation.navigate('locationDef');
          }}
          style={[styles.Button, {width: '100%'}]}>
          <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold'}}>
            Add device to room
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        onBackdropPress={() => {
          setIsModalVisible(false);
        }}
        isVisible={isModalVisible}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.innerModal}>
            <Text
              style={{
                color: '#12B293',
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 25,
              }}>
              Sucessful
            </Text>
            <SuccessIcon />
            <Text style={{width: 239, textAlign: 'center', marginTop: 25}}>
              Device is successfully added to
            </Text>
            <Text
              style={{
                width: 239,
                textAlign: 'center',
                marginTop: 5,
                color: '#12B293',
              }}>
              Master’s Bedroom
            </Text>

            <TouchableOpacity
              onPress={() => {
                setIsModalVisible(false);
                // navigation.navigate('locationDef');
              }}
              style={[styles.Button, {width: 277}]}>
              <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold'}}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DeviceRoom;

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
    width: '80%',
    height: '90%',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  houseName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  room: {
    width: 180,
    height: 170,
    backgroundColor: '#F0F0F0',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    padding: 33,
    display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    // borderWidth: 1,
    justifyContent: 'space-between',
  },
  addRoom: {
    width: 180,
    height: 170,
    backgroundColor: '#12B293',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    display: 'flex',
    // flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    justifyContent: 'center',
  },
  addNew: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    fontStyle: 'normal',
    marginTop: 20,
  },
  addBtn: {
    margin: 20,
  },
  roomsContainer: {
    // borderWidth: 1,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // marginBottom: 100,
    marginTop: 30,
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
    marginTop: 10,
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
  wifiDescription: {
    fontSize: 20,
    marginTop: 50,
    color: '#4F4F4F',
    textAlign: 'center',
    width: '100%',
    lineHeight: 28,
    // borderWidth: 1,
    paddingLeft: 30,
    paddingRight: 30,
  },
  Button: {
    height: 70,
    backgroundColor: '#12B293',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  innerModal: {
    height: '50%',
    width: 365,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
