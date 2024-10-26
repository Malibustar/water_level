import React from 'react';
import { Image } from 'react-native';
import { Modal } from 'react-native';
import {StyleSheet, Text, View} from 'react-native';

const Loader = ({loading}) => {
  return (
    <View>
      <Modal
        transparent={true}
        animationType={'none'}
        visible={loading}
        onRequestClose={() => {
          console.log('close modal');
        }}>
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <Image
              style={{width: 50, height: 50}}
              source={require('../assets/loader.gif')}
            />
            {/* <ActivityIndicator animating={loading} color={'#000'} /> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
