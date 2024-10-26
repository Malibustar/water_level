import React from 'react';
import { Dimensions, PixelRatio } from 'react-native';

const refWidth = 414;
const refHeight = 896;

export const GetHeight = (value) =>{
    const ratio = value/ refHeight;
    return Dimensions.get('window').height * ratio;
}

export const GetWidth = (value) =>{
    const ratio = value/ refWidth;
    return Dimensions.get('window').width * ratio;
}


export const GetFont = (value) =>{
    const ratio = value/ refWidth;
    return Math.round(Dimensions.get('window').width * ratio);
}
