import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Style from '../screens/task/taskStyle';
import switchLogo from '../assets/switch.png';

const Device = ({ item }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <View style={[Style.rowDirection, Style.switchSWrappertyle]}>
                <View >
                    <Text style={Style.devicetext}>{item.mainName}</Text>
                    <Text style={Style.deviceSubtext}>{item.devicename}</Text>
                    <Text style={Style.deviceSubtext2}>Last Uptime</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => setIsActive(!isActive)} style={isActive ? Style.switchActiveStyle : Style.switchStyle}>
                        <Image source={switchLogo} />
                    </TouchableOpacity>
                    <Text style={[Style.deviceSubtext2, Style.switchText]}>{item.time}</Text>
                </View>
            </View>
        </>
    )
}
export default Device