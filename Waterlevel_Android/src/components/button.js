import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LinearGradient} from 'react-native-svg';
import { GetFont, GetHeight, GetWidth } from '../util/GetScreenDimension';

const Button = (props) => {
  const [buttonText, setButtonText] = useState(false)
  return (
    <View
      style={[
        styles.button,
        {
          marginTop: props.marginTop ? props.marginTop : 0,
          marginRight: props.marginRight ? props.marginRight : 0
        }
      ]}>
      <TouchableOpacity
        style={[
          styles.signIn,
          {
            width: props.width ? GetWidth(props.width) : GetWidth(192),
            height: props.height ? GetHeight(props.height) : GetHeight(50),
          },
        ]}
        onPress={props.action ? props.action : null}>
        <View>
          <Text
            style={[
              styles.textSign,
              {
                color: 'white',
              },
            ]}>
            {buttonText ? 'Loading...' : props.text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    // marginTop: 30,
    backgroundColor: '#12B293',
    borderRadius: 20,
    // width: 192,
    alignSelf: 'center'
  },
  signIn: {
    width: '100%',
    height: GetHeight(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
