import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';

const Input = (props) => {
  return (
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
        onChangeText={(val) => handlePasswordChange(val)}
      />
      <TouchableOpacity onPress={updateSecureTextEntry}>
        {data.secureTextEntry ? (
          <Feather name="eye-off" color={'rgba(17, 17, 17, 0.25)'} size={20} />
        ) : (
          <Feather name="eye-off" color={'rgba(17, 17, 17, 0.25)'} size={20} />
        )}
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default Input

const styles = StyleSheet.create({})
