import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';

import React from 'react';
import { Dimensions } from 'react-native';
import {StyleSheet, Text, View} from 'react-native';

const VerticalGragh = () => {
  return (
    <View>
      <VerticalBarGraph
        data={[20, 45, 28, 80, 99, 43, 50]}
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
        width={Dimensions.get('window').width - 35}
        height={Dimensions.get('window').width / 7 + 225}
        barRadius={5}
        barWidthPercentage={0.65}
        baseConfig={{
          hasXAxisBackgroundLines: false,
          xAxisLabelStyle: {
            position: 'right',
            prefix: '$',
          },
        }}
        style={{
          paddingVertical: 10,
        }}
      />
      ;
    </View>
  );
};

export default VerticalGragh;

const styles = StyleSheet.create({});
