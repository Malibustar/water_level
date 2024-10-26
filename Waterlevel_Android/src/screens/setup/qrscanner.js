import {StyleSheet, Text, View, Image} from 'react-native';
import FridayHandScan from '../../assets/fridayHandScan';
import React, {Component} from 'react';
import qrplaceholder from '../../assets/qrplacholder.jpg';
import ArrowUpIcon from '../../assets/arrowUp';
import {TouchableOpacity} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {API_KEY} from '@env';
import Loader from '../../components/loader';

const axios = require('axios').default;

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Waiting</Text>
  </View>
);

class Qrscanner extends Component {
  constructor(props) {
    super(props);
    this.camera = null;
    this.barcodeCodes = '';
    this.loading = false;

    this.state = {
      camera: {
        type: RNCamera.Constants.Type.back,
        flashMode: RNCamera.Constants.FlashMode.auto,
      },
    };
  }

  onBarCodeRead(scanResult) {
    console.log('====================================');
    console.log(this.barcodeCodes);
    console.log('====================================');
    if (this.barcodeCodes) {
      console.log('yes');
      const ScanCode = async () => {
        const scannedCode = await axios
          .post(
            'https://friday-apis.herokuapp.com/device/portal/get_mask?APIKey=' +
              API_KEY,
            {
              mask: this.barcodeCodes,
            },
          )
          .catch((error) => console.log(error.response.data));

        console.log('====================================');
        console.log(scannedCode);
        console.log('====================================');
      };
      ScanCode();
    } else {
      console.log('====================================');
      console.log('nooo');
      console.log('====================================');
    }
    // console.warn(scanResult.type);
    console.warn(scanResult.data);

    if (scanResult.data != null) {
      if (!this.barcodeCodes.includes(scanResult.data)) {
        this.barcodeCodes = scanResult.data;

        // console.warn('onBarCodeRead call');
      }
    }
    return;
  }

  // async takePicture() {
  //   if (this.camera) {
  //     const options = {quality: 0.5, base64: true};
  //     const data = await this.camera.takePictureAsync(options);
  //     console.log(data.uri);
  //   }
  // }

  // barcodeRecognized = ({barcodes}) => {
  //   // barcodes.forEach((barcode) => console.warn(barcode.data));
  //   console.warn(barcodes.data);
  // };

  render() {
    return (
      <View style={styles.container}>
        {/* <RNCamera captureAudio={false} /> */}

        {/* <QRCodeScanner containerStyle={{marginTop: 20}} /> */}
        <FridayHandScan />
        <Text style={styles.wifiDescription}>
          Place the unique QR code of the Friday device that you are installing
        </Text>

        <View style={styles.qrBox}>
          <RNCamera
            ref={(ref) => {
              this.camera = ref;
            }}
            onBarCodeRead={this.onBarCodeRead.bind(this)}
            // onGoogleVisionBarcodesDetected={this.barcodeRecognized}
            style={styles.preview}
            ratio={'2:2'}
            defaultTouchToFocus
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          />
        </View>
        <Text style={styles.wifiDesc}>Can’t scan for Friday Device?</Text>
        <Text style={styles.manualConnect}>
          Connect manually using Device MAC Address
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('fridaySwitchPro');
          }}>
          <ArrowUpIcon />
        </TouchableOpacity>
        <Loader loading={this.loading} />
      </View>
    );
  }
}

export default Qrscanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  wifiDescription: {
    fontSize: 20,
    marginTop: 20,
    color: '#4F4F4F',
    textAlign: 'center',
    width: 289,
  },
  wifiDesc: {
    fontSize: 20,
    marginTop: 50,
    color: '#4F4F4F',
    textAlign: 'center',
    width: 289,
  },
  qrBox: {
    width: 208,
    height: 350,
    // backgroundColor: '#12B293',
    borderRadius: 20,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  manualConnect: {
    fontSize: 20,
    marginTop: 5,
    color: '#12B293',
    textAlign: 'center',
    // width: 289,
  },
  preview: {
    flex: 1,
    height: '90%',
    width: '100%',
  },
});
