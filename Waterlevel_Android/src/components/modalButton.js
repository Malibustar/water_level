import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import cross from '../assets/cross.png';
import ButtomModal from './buttomModal/buttomModal';
import Style from '../screens/getStarted/getStartedStyle';


const ModalButtons = () => {


  const [showModal, setshowModal] = useState(false);


  return (
    <View>
      <TouchableOpacity
        onPress={() => setshowModal(!showModal)}
        style={Style.buttomButton}>
        <Image source={cross} />
      </TouchableOpacity>
      {/* {showModal && < ButtomModal setActive={setshowModal}  activeState={showModal}/>} */}
    </View>
  );
};

export default ModalButtons;
