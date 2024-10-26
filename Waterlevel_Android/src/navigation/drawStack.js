import * as React from 'react';
import GetStartedScreen from '../screens/getStarted/getStarted';
import TaskScreen from '../screens/task/task';
import {Drawer} from './common';
import DrawSIde from '../components/drawer/drawer';
import Poseidon from '../screens/poseidon';
const DrawNav = Drawer;
function DrawerStack() {
  return (
    <DrawNav.Navigator
      //   screenOptions={{
      //     headerShown: false,
      //   }}
      drawerContent={(props) => <DrawSIde {...props} />}
      initialRouteName="GetStartedScreen">
      <DrawNav.Screen name="GetStartedScreen" component={GetStartedScreen} />
      <DrawNav.Screen name="TaskScreen" component={TaskScreen} />
      <DrawNav.Screen name="poseidon" component={Poseidon} />
    </DrawNav.Navigator>
  );
}

export default DrawerStack;
