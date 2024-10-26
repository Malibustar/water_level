import React, {useState, useEffect} from 'react';
import {SwipeablePanel} from 'rn-swipeable-panel';
import {StyleSheet, Text, View} from 'react-native';
import AddTaskIcon from '../assets/addTask';
import AddReminderIcon from '../assets/addReminder';
import AddRoomIcon from '../assets/addRoom';
import {TouchableOpacity} from 'react-native';
import BarStyleIcon from '../assets/barStyle';

const NewModal = ({setModalVisible, show, navigation}) => {
  bar = <BarStyleIcon />;
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: false,
    showCloseButton: false,
    barStyle: bar,
    closeOnTouchOutside: true,
    onClose: () => setModalVisible(false),
    onPressCloseButton: () => setModalVisible(false),
    // ...or any prop you want
  });
  //   const [isPanelActive, setIsPanelActive] = useState(show);
  //   console.log({show});
  //   const openPanel = () => {
  //     setIsPanelActive(true);
  //   };

  //   const closePanel = () => {
  //     setIsPanelActive(false);
  //   };

  //   useEffect(() => {
  //     setIsPanelActive(show);
  //   }, [show]);

  return (
    <SwipeablePanel {...panelProps} isActive={show}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity style={styles.modalItem}>
            <AddTaskIcon />
            <View style={styles.modalItemTextCon}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#000000',
                  fontStyle: 'normal',
                }}>
                Add a new task
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#000000',
                  fontStyle: 'normal',
                }}>
                Tell Friday to turn on or turn off a device at the desired time
                to save energy
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.modalItem}>
            <AddReminderIcon />
            <View style={styles.modalItemTextCon}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#000000',
                  fontStyle: 'normal',
                }}>
                Add a reminder
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#000000',
                  fontStyle: 'normal',
                }}>
                Create alarms for personal tasks You can link Tasks and Reminder
                together
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
              navigation.navigate('createNewHome');
            }}
            style={styles.modalItem}>
            <AddRoomIcon />
            <View style={styles.modalItemTextCon}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#000000',
                  fontStyle: 'normal',
                }}>
                Add a new room
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#000000',
                  fontStyle: 'normal',
                }}>
                Add a new room to a existing home
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SwipeablePanel>
  );
};

export default NewModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
    width: '100%',
    height: 300,
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  innerContainer: {
    width: '90%',
    height: '90%',
    // borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalItem: {
    width: '95%',
    height: '30%',
    // borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-around'
  },
  modalItemTextCon: {
    width: 250,
    height: '75%',
    // borderWidth: 1,
    paddingLeft: 30,
    display: 'flex',
  },
});
