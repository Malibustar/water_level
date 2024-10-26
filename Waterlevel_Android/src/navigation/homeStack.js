import * as React from 'react';
import GetStartedScreen from '../screens/getStarted/getStarted';
import TaskScreen from '../screens/task/task';

import {Stack} from './common';
const Home = Stack;
function HomeStack() {
  return (
    <Home.Navigator
    headerMode="none"
      // screenOptions={{
      //   headerShown: true,
      //   headerStyle: { backgroundColor: "#12b293" },
      //   headerTitleStyle: { color: "black" },

      // }}
      initialRouteName="GetStartedScreen">
      <Home.Screen name="GetStartedScreen" component={GetStartedScreen} />
      {/* <Home.Screen name="TaskScreen" component={TaskScreen} /> */}
    </Home.Navigator>
  );
}

export default HomeStack;
