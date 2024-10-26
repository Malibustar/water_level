import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddIcon from '../../assets/add';
import KitchenIcon from '../../assets/roomIcon';
import Button from '../../components/button';
import Picker from '../../components/picker';
import Modal from 'react-native-modal';
import CreateHome from './createHome';
import {API_KEY} from '@env';
import AsyncStorage from '@react-native-community/async-storage';
import Select from '../../components/select';
import {ScrollView} from 'react-native';
import Loader from '../../components/loader';

const axios = require('axios').default;

const CreateNewHome = ({navigation}) => {
  const [rooms, setRooms] = useState([]);

  const [home, setHome] = useState('no home');

  const [loading, setLoading] = useState(false);

  const [data, setData] = React.useState({
    email: null,
    userToken: null,
    homeName: null,
    homeAddress: null,
    homeToken: null,
    roomType: null,
    roomName: null,
    check_homeNameChange: true,
  });

  React.useEffect(() => {
    const newUser = AsyncStorage.getItem('newUser');

    newUser.then((value) => {
      value = JSON.parse(value);
      setRooms(value.user_payload.Rooms);
      setHome(value.user_payload.Homes[0].home_name);

      setData({
        ...data,
        email: value.user_details.email,
        homeToken: value.user_payload.Homes[0].home_token,
        userToken: value.user_details.user_token,
        homeName: value.user_payload.Homes[0].home_name,
      });
    });
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const homeNameInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        homeName: val,
        check_homeNameChange: true,
        isValidHomeName: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_homeNameChange: false,
        isValidHomeName: false,
      });
    }
  };

  const roomNameChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        roomName: val,
        check_roomNameChange: true,
        isValidRoomName: true,
      });
    } else {
      setData({
        ...data,
        roomName: val,
        check_roomNameChange: false,
        isValidRoomName: false,
      });
    }
  };

  const homeAddressInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        homeAddress: val,
        check_homeAddressChange: true,
        isValidHomeAddress: true,
      });
    } else {
      setData({
        ...data,
        homeAddress: val,
        check_homeAddressChange: false,
        isValidHomeAddress: false,
      });
    }
  };

  const CreateHome = async () => {
    const createdHome = await axios
      .post('https://friday-apis.herokuapp.com/home/create?APIKey=' + API_KEY, {
        user_token: data.userToken,
        home_name: data.homeName,
        home_address: data.homeAddress,
      })
      .catch((error) => console.log(error.response.data));

  };

  const CreateRoom = async () => {
    setLoading(true);
    const createdRoom = await axios
      .post('https://friday-apis.herokuapp.com/room/create?APIKey=' + API_KEY, {
        home_token: data.homeToken,
        room_name: data.roomName,
        room_type: data.roomType,
      })
      .catch((error) => console.log(error.response.data));

    const fetchUserDetails = await axios
      .post(
        'https://friday-apis.herokuapp.com/user/payload?APIKey=' + API_KEY,
        {
          email: data.email,
          user_token: data.userToken,
        },
      )
      .catch((error) => {
        setLoading(false);
        console.log(error.response.data);
      });


    if (fetchUserDetails) {
      setLoading(false);
      setRooms(fetchUserDetails?.data.user_payload.Rooms);
    } else {
      console.log('====================================');
      console.log('No user details gotten');
      console.log('====================================');
    }

  };


  return (
    <ScrollView
      contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
      style={styles.container}>
      <View style={styles.innerContainer}>
        {home !== 'no home' ? (
          <Text style={styles.bigText}>Add Rooms to {home}</Text>
        ) : (
          <View>
            <Text style={styles.greenText}>Create a new</Text>
            <Text style={styles.bigText}>Smart Home</Text>

            <View style={styles.input_footer}>
              <Text style={[styles.text_footer]}>Smart Home Name</Text>
              <View style={styles.action}>
                <Feather
                  name="home"
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
                  onChangeText={(val) => homeNameInputChange(val)}
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

            <View style={styles.input_footer}>
              <Text style={[styles.text_footer]}>Smart Home Address</Text>
              <View style={styles.action}>
                <Feather
                  name="map"
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
                  onChangeText={(val) => homeAddressInputChange(val)}
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
          </View>
        )}

        {/* <Picker /> */}
        {/* <Select /> */}

        <Text style={styles.greenText}>Rooms</Text>
        <View style={styles.roomsContainer}>
          {rooms.map((room, key) => {
            return (
              <View key={key} style={styles.room}>
                {room.room_type == 'Kitchen' ? <KitchenIcon /> : null}
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', color: '#B8B8B8'}}>
                  {room.room_type}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#555555',
                    lineHeight: 17,
                    width: 69,
                  }}>
                  {room.room_name}
                </Text>
              </View>
            );
          })}
          <TouchableOpacity
            onPress={() => {
              setIsModalVisible(true);
            }}
            style={styles.addRoom}>
            <AddIcon style={styles.addBtn} />
            <Text style={styles.addNew}>Add New Room</Text>
          </TouchableOpacity>
        </View>

        <Button
          text="Continue"
          width={350}
          action={() => {
            if (home == 'no home') {
              CreateHome();
              navigation.navigate('location');
            } else {
              navigation.navigate('location');
            }
          }}
        />
      </View>
      <Modal
        onBackdropPress={() => {
          setIsModalVisible(false);
        }}
        isVisible={isModalVisible}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.innerModal}>
            <Text style={{color: '#12B293', fontSize: 24, fontWeight: 'bold'}}>
              Create a new room
            </Text>

            {/* <Picker width={318} /> */}
            <Select setData={setData} width={318} />

            <View style={[styles.input_footer, {width: 318}]}>
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
                  onChangeText={(val) => roomNameChange(val)}
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
            <TouchableOpacity
              onPress={() => {
                setIsModalVisible(false);
                CreateRoom();
                // navigation.navigate('addDevices');
              }}
              style={styles.Button}>
              <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold'}}>
                Create Room
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Loader loading={loading} />
    </ScrollView>
  );
};

export default CreateNewHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '100%',
    backgroundColor: '#FFF',
    display: 'flex',
  },
  innerContainer: {
    width: '80%',
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
    marginBottom: 10,
    color: '#000000',
  },
  addRoom: {
    width: '40%',
    height: 170,
    backgroundColor: '#12B293',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    display: 'flex',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  room: {
    width: '40%',
    height: 170,
    backgroundColor: '#F0F0F0',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    padding: 33,
    display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
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
    marginBottom: 20,
  },
  innerModal: {
    // height: 449,
    width: 365,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
  },
  Button: {
    width: 318,
    height: 50,
    backgroundColor: '#12B293',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
